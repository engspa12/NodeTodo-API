const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10,(err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$QbnNQd73aXLaqbwX4qIYle1vO0NX6NVwy2ayyl/ZMp4HuNzqArAcO';

bcrypt.compare('123E', hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };

 //This is what we are going to send back to the user
 //This value will be store in the tokens array
 //The person makes the request with the token

 //The sender produce the JSON Web Token using the secret-key (salting)
// var token = jwt.sign(data,'123abc');
// console.log(token);
//
// var decoded = jwt.verify(token,'123abc');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
//
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// //Data we want to send back to the client
// var data = {
//   id: 4
// };
//
// //This is what we are going to send back to the user
// var token = {
//   data: data,
//   //Salt the hash ---> 'somesecret'
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash){
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust')
// }
