var express = require('express')
var app = express()
app.set('view engine','ejs')
const path = require('path')
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

let indexRouter = require("./router/index-router");

let teachersRouter = require("./router/teachers-router");
let teachersModel = require("./models/teacher")

let subjectsRouter = require("./router/subjects-router");
let subjectsModel = require("./models/subject")

let studentsRouter = require("./router/students-router")
let studentsModel = require("./models/student")

app.use('/', indexRouter)
app.use('/teachers', teachersRouter)
app.use('/subjects', subjectsRouter)
app.use('/students', studentsRouter)

app.listen(3007, function(){console.log("nyabung ka express,port 3007")});
