// const assert = require('assert');
// const Question = require('../db/models/question');
//
// describe('Deleting questions from mongoDB', () => {
//
//   it('remove question model instance', (done) => {
//     const sampleQ = new Question({
//       address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC'
//     });
//     sampleQ.save().then(() => {
//       sampleQ.remove()
//         .then(() => Question.findOne({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC' }))
//         .then((question) => {
//           assert(question === null);
//           done();
//         });
//     });
//   });
//
//   // findOneAndRemove triggering something with ethereum
//   // may be a naming issue with Question
//
//   // it('class method find and remove', (done) => {
//   //   Question.findOneAndRemove({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC' })
//   //     .then(() => Question.findOne({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC' }))
//   //     .then((question) => {
//   //       assert(question === null);
//   //       done();
//   //     });
//   // });
//
//   // it('class method findByIdAndRemove', (done) => {
//   //   Question.findByIdAndRemove(sampleQ._id)
//   //     .then(() => Question.findOne({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafC' }))
//   //     .then((question) => {
//   //       assert(question === null);
//   //       done();
//   //     });
//   // });
//
// });
