const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/QuestionFactory.json');
const compiledQuestion = require('../ethereum/build/Question.json');

let accounts;
let factory;
let questionAddress;
let question;

beforeEach(async () => {
  
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createQuestion('this is the question???').send({
    from: accounts[0],
    gas: '1000000'
  });

  [questionAddress] = await factory.methods.getDeployedQuestions().call();
  question = await new web3.eth.Contract(
    JSON.parse(compiledQuestion.interface),
    questionAddress
  );

  await question.methods.setBounty().send({
    from: accounts[0],
    value: '10000000000000000000'
  })

});

describe('Questions', () => {
    it('deploys a factory and a question', () => {
      assert.ok(factory.options.address);
      assert.ok(question.options.address);
    });

    it('marks asker of question ask asker', async () => {
      const asker = await question.methods.asker().call();
      assert.equal(accounts[0], asker);
    });

    it('sets a bounty for the question', async () => {
      const bounty = await question.methods.bounty().call();
      assert.ok(bounty);
      assert.equal(bounty, '10000000000000000000');
    });

    it('allows a question to receive an answer', async () => {
      await question.methods.createAnswer('This is the answer!').send({
        from: accounts[1],
        gas: '1000000'
      });
      const answer = await question.methods.answers(0).call();
      assert.ok(answer);
      assert.equal(answer.answerString, 'This is the answer!');
    });

    it('allows asker to approve an answer, and transfers bounty to the approved address', async () => {
      // creates an answer from account 2
      await question.methods.createAnswer('This is the answer!').send({
        from: accounts[1],
        gas: '1000000'
      });
      // asker approves the answer
      await question.methods.approveAnswer(0).send({
        from: accounts[0],
        gas: '1000000'
      });
      let balance = await web3.eth.getBalance(accounts[1]);
      balance = web3.utils.fromWei(balance, 'ether');
      balance = parseFloat(balance);

      assert(balance > 109);
    });
});
