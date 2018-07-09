const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const server = require('../server');
const Question = mongoose.model('question');

describe('Tests for the /api routes', () => {
  it('handles get request to /api', (done) => {
    request(server)
      .get('/api')
      .end((err, response) => {
        assert(response.body.some === 'data');
        done();
      });
  });

  it('POST to /api/questions creates a question', (done) => {
    request(server)
      .post('/api/questions/new')
      .send({address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafv'})
      .end((err, response) => {
        assert(response.body.address === '0x1923dad4b0AcD103f93f789056E73fD06Ec5bafv');
        done();
      });
  });

  it('PUT to /api/questions/:id allows editing of question', (done) => {
    const question = new Question({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5DAVE', questionString: 'this is the question!'});
    question.save().then(() => {
      request(server)
        .put(`/api/questions/${question._id}`)
        .send({questionString: 'Need quality smart contract auditing!'})
        .end((err, response) => {
          assert(response.body.questionString === 'Need quality smart contract auditing!');
          done();
        });
    });
  });

  it('DELETE to /api/question/:id deletes a question from mongoDB', (done) => {
    const question = new Question({ address : '0x1923dad4b0AcD103f93f789056E73fD06Ec5DAVid' });
    question.save().then(() => {
      request(server)
        .delete(`/api/questions/${question._id}`)
        .end((err, response) => {
          Question.findOne({ address: '0x1923dad4b0AcD103f93f789056E73fD06Ec5DAVid' })
          .then((question) => {
            assert(question === null);
            done();
          });
        });
    });
  });
});
