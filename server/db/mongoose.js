var mongoose = require('mongoose');

//{ useNewUrlParser: true }
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {
  mongoose: mongoose
};
