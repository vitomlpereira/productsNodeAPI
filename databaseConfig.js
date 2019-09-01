//Import the mongoose module
var mongoose = require('mongoose');

exports.configureDataSource = ()=>{
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://vitomlpereira:vitomlpereira@vmlp1-9dsqo.mongodb.net/products?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}

