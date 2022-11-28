const express = require('express');
const Task = require('../Model/toDoList.model');
var bodyParser = require('body-parser')

var router = express();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.json());

// Move to Update page
router.get('/update/:id', async (req, res) => {
    try {
        Task.findById(req.params.id, function (err, doc) {
            if (err) {
                console.log('ERROR: ' + err);
            } else {
                res.render('/ToDoList/View/update.ejs', { doc })
            }
        });
    } catch (error) {
        console.log('ERROR: ' + error)
    }
})

//Update
router.post('/update/:id', async (req, res) => {
    try {
        if (!req.body) {
            res.send({ message: "Body is empty" });
            return;
        }
        Task.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
            res.redirect('/');
        })
    } catch (error) {
        console.log('ERROR: ' + error);
    }
})

// Get all task
router.get('/', async (req, res) => {
    try {
        const rawData = Task.find(function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.render('/ToDoList/View/index.ejs', {
                    data
                });
            }
        })
    } catch (error) {
        console.log(error)
    }
});

// Create new task
router.post('/new', async (req, res) => {
    try {
        if (!req.body) {
            res.send({ message: "Body is empty" });
            return;
        }
        var temp = new Task();
        temp.task = req.body.task;
        temp.save(temp).then(data => {
            res.redirect('/');
        })
    } catch (error) {
        res.send('ERROR: ' + error);
    }
});

//Delete task
router.post('/delete/:id', async (req, res) => {
    try {
        const temp = Task.findByIdAndDelete(req.params.id, (error, data) => {
            res.redirect('/');
        });
    } catch (error) {
        console.log('ERROR: ' + error);
    }
});

module.exports = router;