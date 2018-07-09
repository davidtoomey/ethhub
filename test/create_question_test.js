const assert = require('assert');
const Question = require('../db/models/question');

describe('Creating Questions with MongoDB', () => {
  // getting the weird before each error
  // with the not enough funds to send tx error after writing the test for the delete route in /test/api_route_test.js
  // it('saves a question', (done) => {
  //   const sampleQ = new Question({
  //     address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC',
  //     asker: '0x30a593279087308Fb141E816Cde64C5082C8c648',
  //     questionString: 'Need quality smart contract auditing ASAP for startup',
  //     bounty: 1.4
  //   });
  //
  //   sampleQ.save()
  //     .then(() => {
  //       assert(!sampleQ.isNew);
  //       done();
  //     });
  // });
});
