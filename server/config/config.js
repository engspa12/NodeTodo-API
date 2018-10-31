var env = process.env.NODE_ENV || 'development';
console.log('env ********', env);

if(env === 'development' || env === 'test'){
  var config = require('./config.json');
  //bracket notation
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
  //console.log(Object.keys(envConfig));
  //console.log(config);
}

//Only development and test environment variables
//are configured locally via some file.
//The production environment variables, those are always going to
//get configured via either the Heroku command line tools or
//the Heroku web application



// if(env === 'development'){
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// } else if (env === 'test'){
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }
