const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

const {User} = require('./../server/models/user.js');

var id = '5bc9447820b3522440ed9ffd';

var idUser = '5bc6d3735cee72435ca4c962';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

//Mongoose converts automatically the String id we set above to an Object ID for the query
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById(idUser).then((user) => {
  if (!user){
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));
