require('dotenv').config();
const mongoose = require('mongoose');

// Connect to Mongo database
mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/organizationDb',{
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true
    }
);
  
  let db = mongoose.connection;
  db.once('open', () => {
    console.log(`🔗 Connected to MongoDB on ${db.host}: ${db.port}`);
  });
  
  db.on('error', err => {
    console.log(`🐻 Connection failed! MongoDB error:\n${err}`);
  });
  
  // Require other models, and export them
  // NOTE: Our files can have multiple module.exports statements!
  // Make sure to export all models
module.exports.User = require('./user');
module.exports.Organization = require('./organization');
module.exports.Event = require('./event');