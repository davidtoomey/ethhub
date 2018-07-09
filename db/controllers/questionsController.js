const Question = require('../models/question');

module.exports = {

  greeting(req, res) {
    res.send({ some: 'data' });
  },

  create(req, res, next) {
    const questionProps = req.body;

    Question.create(questionProps)
      .then(question => res.send(question))
      .catch(next);
  },

  edit(req, res, next) {
    const questionProps = req.body;
    const questionId = req.params.id;

    Question.findByIdAndUpdate({ _id: questionId }, questionProps)
      .then(() => Question.findById({ _id: questionId }))
      .then(question => res.send(question))
      .catch(next);
  },

  delete(req, res, next) {
    const questionId = req.params.id;

    Question.findByIdAndRemove({ _id: questionId })
      .then(question => res.status(204).send(question))
      .catch(next);
  }

};
