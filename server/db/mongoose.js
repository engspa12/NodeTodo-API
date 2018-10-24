var mongoose = require('mongoose');

//{ useNewUrlParser: true }
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true });

module.exports = {
  mongoose: mongoose
};

//process.env.NODE_ENV === 'production' -----> Heroku
