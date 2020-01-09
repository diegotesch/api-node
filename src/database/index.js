const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', {
    useNewUrlParser: true,
    useCreateIndex: true
 });
// mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;