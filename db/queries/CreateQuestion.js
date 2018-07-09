const Question = require('../models/question');

module.exports = (questionProps) => {
  /**
    * Finds a single question in the question collection.
    * @param {object} questionProps - object containing an _id, address, questionString, asker, and bounty
    * @return {promise} A promise that resolves with the Question created
  */
  const question = new Question(questionProps);

  return question.save();
};
