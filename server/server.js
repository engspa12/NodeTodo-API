require('./config/config.js');

const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
//const port = process.env.PORT || 3000;
const port = process.env.PORT;

app.use(bodyParser.json());

//Resources creation
app.post('/todos',(req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  //console.log(req.body);
});

app.get('/todos', (req, res) => {
  //find() can receive empty arguments
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1235431
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //res.send(req.params);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo: todo});
    },(e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send({error: 'id not valid'});
  }

  Todo.findOneAndDelete({_id: id}).then((todo) => {
    if(!todo){
      return res.status(404).send({error: 'todo not found'});
    }

    res.send({todo});

    },(e) => {
      res.status(400).send({error: 'error in method findOneAndDelete'});
  });
});

app.patch('/todos/:id',(req, res) => {
  var id = req.params.id;
  //1)
  var body = _.pick(req.body, ['text','completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send({error: 'id not valid'});
  }

  //2)
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  //3)
  Todo.findOneAndUpdate({_id: id}, {$set: body},{new: true}).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
