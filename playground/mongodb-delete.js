//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client) => {
  if (err){
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne --> deletes the first item that matches the criteria
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Daniel'}).then((result) => {
  //    console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({text: 'Again'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5bc553c06cdad776ed2508e7')}).then((result) => {
    console.log(result);
  });

  //client.close();
});
