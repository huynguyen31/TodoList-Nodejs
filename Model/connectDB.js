const mongoose = require('mongoose');

var MONGO_URI = "mongodb://localhost:27017/toDoList"

mongoose.connect(MONGO_URI, (err) => {
    if (!err) {console.log('INFO: Database connected')}
    else{console.log('ERROR: ' + err)}
});

require('./toDoList.model')