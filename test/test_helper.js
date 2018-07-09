const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// before hook makes sure mongoDB loads before
// running any tests
before(() => {
  mongoose.connect('mongodb://localhost:27017/qanda_test', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => {})
    .on('error', (error) => {
      console.warn('Error', error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.questions.drop(() => {
    done();
  });
});
