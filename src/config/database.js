/* eslint-disable no-console */

import mongoose from 'mongoose';

import constants from './constants';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provide
try {
  mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running \n'))
  .on('error', e => {
    throw e;
  });


// mongoose
// .connect(constants.MONGO_URL, { useNewUrlParser: true })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log('Mongo Error', err));
  
