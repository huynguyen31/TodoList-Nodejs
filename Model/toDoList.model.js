const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var listTaskSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    task:{
        type: String
    }
}, {_id: false});
listTaskSchema.plugin(AutoIncrement);

module.exports = mongoose.model('tasks', listTaskSchema)