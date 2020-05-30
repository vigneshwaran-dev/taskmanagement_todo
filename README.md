# Task management Todo

Deployed : 
Web : https://todo-hackerearth.web.app/
Server : https://todoserver-hackerearth.herokuapp.com/

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://todo-hackerearth.web.app/)

Task mangement todo is a full-stack web application built with MEVN Stack(MongoDB, Express, VueJS, Node). It is built for satisfying the criteria of a hackathon conducted by https://www.hackerearth.com/. The original hackathon at https://www.hackerearth.com/challenges/hackathon/stackhack-v1/

# Feature

* User athentication : Registration of user and encryption of passwords which is achieved via JSON Web Tokens
* Todo Labels which include Personal, Work, Shopping and Others
* Todo Status like New, On Progress and completed
* Searching with titles using filters which includes date range and the above mentioned labels and status.
* Users CRUD operations like Changing passwords, name and photo
* Todo CRUD operations like creating, updating status and deleting


### Tech

Task Management Todo uses a number of open source projects to work properly:

* VueJS - HTML enhanced for web apps!
* NodeJs - evented I/O for the backend
* ExpressJS - fast node.js network app framework converter
* MongoDB - a document based database engine
* Mongoose - elegant mongodb object modeling for node.js
* v-calendar - An elegant calendar and datepicker plugin for Vuejs.
* Multer - a node.js middleware for handling multipart/form-data
* bcryptjs - A library to help you hash passwords.

And of course Task Management Todo itself is open source with a publiu repository
https://github.com/vigneshwaran-dev/taskmanagement_todo

### Installation

Install the dependencies and devDependencies and start the developmental server.

```sh
$ npm i -g @vue/cli
$ npm i
$ npm run serve
$ cd server
$ npm i
$ npm run dev
```

src/main.js needs to be updated with the backend API link
server/.env needs to be updated with the mongodb address

License
----

MIT
