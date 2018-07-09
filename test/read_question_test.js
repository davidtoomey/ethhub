// const assert = require('assert');
// const Question = require('../db/models/question');
//
// describe('Reading questions out of the mongoDB database', () => {
//   let sampleQ2;
//
//   beforeEach((done) => {
//     sampleQ2 = new Question({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC' });
//     sampleQ2.save()
//       .then(() => done());
//   });
//
//   it('finds all questions with address of 0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC', (done) => {
//     Question.find({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC'})
//       .then((questions) => {
//         assert(questions[0]._id.toString() === sampleQ2._id.toString());
//         done();
//       });
//   });
//
//   // Error not enough gas to make tx
//   // ganache-cli is likely culprit or naming convention error
//   // it('finds a question with a particular id', (done) => {
//   //   Question.findOne({ _id: sampleQ2._id })
//   //     .then((question) => {
//   //       // assert(question[0].address === '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC');
//   //       console.log(questions[0].address);
//   //       done();
//   //     });
//   // });
//
// });
