const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const jwt = require('jsonwebtoken');

module.exports.fetchTodos = (req, res) => {
    jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
        if(!err){

            var searchObj = {
                user : decoded.userId,
                priority : { $in: [] },
                label : { $in: [] }
            }

            if(req.query.new == 'true')
                searchObj.priority.$in.push('new');

            if(req.query.progress == 'true')
                searchObj.priority.$in.push('progress');

            if(req.query.completed == 'true')
                searchObj.priority.$in.push('completed');

            if(req.query.personal == 'true')
                searchObj.label.$in.push('personal');

            if(req.query.work == 'true')
                searchObj.label.$in.push('work');

            if(req.query.shopping == 'true')
                searchObj.label.$in.push('shopping');

            if(req.query.others == 'true')
                searchObj.label.$in.push('others');

            if(req.query.title)
                searchObj.title = {$regex: req.query.title , $options: "i"};

            if(req.query.startDate)
                if(req.query.endDate){
                    var endDate = new Date(req.query.endDate);
                    endDate.setDate(endDate.getDate() + 1);
                    searchObj.date = { 
                        $gte: new Date(req.query.startDate),
                        $lte: endDate
                    };
                }
                else
                    searchObj.date = { $eq: new Date(req.query.startDate)};

            Todo.find(searchObj, (err, doc) => {
                if(!err)
                    res.json(doc);
                else{
                    console.log(err);
                    res.status(500);
                    res.json(err);
                }
            });
        }
        else{
            res.status(401);
            res.json({
                title : 'Error',
                error : 'Invalid User'
            });
        }
    });
}

module.exports.insertTodo = (req, res) => {
    jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
        if(!err){
            var todo = new Todo();
            todo.user = decoded.userId;
            todo.title = req.body.title;
            todo.note = req.body.note;
            todo.date = req.body.date;
            todo.label = req.body.label;

            todo.save((err, doc) => {
                if(!err)
                    res.send(doc);
                else{
                    res.status(500);
                    console.log(err);
                    res.json(err);
                }
            });
        } 
        else{
            res.status(401);
            res.json({
                title : 'Error',
                error : 'Invalid User'
            });
        }
    });

    
}

module.exports.updateTodo = async (req, res) => {
    jwt.verify(req.params.token, process.env.JWT_SECRET, (err) => {
        if(err){
            res.status(401);
            res.json({
                title : 'Error',
                error : 'Invalid User'
            }); 
        }
        else {
            Todo.findByIdAndUpdate({_id : req.body._id},{priority : req.body.priority}, (err, doc) => {
                if(!err)
                    res.json(doc);
                else{
                    res.status(500);
                    res.json(err);
                }
            });
        }
    });
}

module.exports.deleteTodo = (req, res) => {
    jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            res.status(401);
            res.json({
                title : 'Error',
                error : 'Invalid User'
            }); 
        }
        else {
            Todo.findOneAndDelete({_id : req.params._id, user : decoded.userId }, (err) => {
                if(err){
                    res.status(500);
                    res.json(err);
                }
                res.status(200);
            });
        }
    });
}