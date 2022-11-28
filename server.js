require('./Model/connectDB');

const express = require('express');

const toDoListcontroller = require('./Controller/toDoList.controller');

const path = require('path');

var app = express();
app.listen(3000, () => {
    console.log('INFO: Express server started at port 3000');
});

app.use('/', toDoListcontroller);
app.engine('html', require('ejs').renderFile);
// app.set('views', path.join(__dirname, '/View'));
app.use('/public', express.static('public'));
app.use(express.json());

