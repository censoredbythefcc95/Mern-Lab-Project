const mongoose = require('mongoose');

const {MONGODBURI} = process.env;
const config = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(MONGODBURI, config);

const db = mongoose.connection;
// ADDITIONAL MESSAGE CONNECTIONS
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on(' good - connected', () => console.log('mongo connected: ', mongoURI));
db.on('bad - disconnected', () => console.log('mongo disconnected'));

db.close();

module.exports = mongoose;