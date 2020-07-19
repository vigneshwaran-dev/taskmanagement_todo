# Task management Todo

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

Task mangement todo is a full-stack web application built with MEVN Stack(MongoDB, Express, VueJS, Node).

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


### Installation

Install the dependencies and devDependencies and start the developmental server.

```sh
$ npm i
```

You can run this if you have installed Vue JS globally [$ npm i -g @vue/cli]
```sh
$ npm run serve
```
or run npx command

```sh
$ npx vue-cli-service serve
```

For the server side run these commands

```sh
$ cd server
$ npm i
$ npm run dev
```

src/main.js needs to be updated with the backend API link
server/.env needs to be updated with the mongodb address

License
----

MIT
