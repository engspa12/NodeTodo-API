var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

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

app.listen(3000, () => {
  console.log('Started on port 3000');
});


// var newUser = new User({
//   email: '    johnd23g@gmail.com     '
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user\n', doc);
// },(e) => {
//   console.log('Unable to save user', e);
// });


// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// },(e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: '  Other Edit  ',
//   // completed: false,
//   // completedAt: 1345
// });
//
// otherTodo.save().then((doc) => {
//   console.log('Saved todo\n', doc);
// }, (e) => {
//   console.log('Unable to save',e);
// });
