require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./connection');

const router = require('./router');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static('images'));
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, console.log("Server listening at port : "+port));