const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

const {User} = require('./../server/models/user.js');

//Todo.remove({}) ---> you can't pass in an empty argument and expect all the documents
//to get removed
// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndDelete
//Todo.findByIdAndRemove

// Todo.findOneAndDelete({_id: '5bcac08a6a0f8e9c4489ff66'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5bcac08a6a0f8e9c4489ff66').then((todo) => {
  console.log(todo);
});
