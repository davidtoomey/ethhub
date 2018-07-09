pragma solidity ^0.4.23;

contract QuestionFactory {
    address public creator;
    address[] public deployedQuestions;

    constructor() public {
        creator = msg.sender;
    }

    function createQuestion(string qString) public {
        address newQuestion = new Question(qString, msg.sender);
        deployedQuestions.push(newQuestion);
    }

    function getDeployedQuestions() public view returns(address[]) {
        return deployedQuestions;
    }
}

contract Question {
    address public asker;
    string public questionString;
    uint public bounty;
    Answer[] public answers;
    bool public answerApproved;

    constructor(string qString, address askerAddr) public {
        asker = askerAddr;
        questionString = qString;
    }

    modifier restricted() {
        require(msg.sender == asker);
        _;
    }

    function setBounty() public payable restricted {
      require(msg.value > 0);
      bounty = msg.value;
    }

    struct Answer {
        address answerer;
        string answerString;
    }

    function createAnswer(string _answerString) public {
        Answer memory newAnswer = Answer({
            answerer: msg.sender,
            answerString: _answerString
        });
        answers.push(newAnswer);
    }

    function approveAnswer(uint index) public restricted {
        Answer storage answer = answers[index];
        answerApproved = true;
        answer.answerer.transfer(this.balance);
    }

    function getSummary() public view returns (
      string, uint, uint, address, bool
      ) {
        return (
            questionString,
            this.balance,
            answers.length,
            asker,
            answerApproved
        );
    }

    function getAnswersCount() public view returns (uint) {
        return answers.length;
    }
}
