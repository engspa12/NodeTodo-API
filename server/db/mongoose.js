var mongoose = require('mongoose');

//{ useNewUrlParser: true }
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {
  mongoose: mongoose
};
