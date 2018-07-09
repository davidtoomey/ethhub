import web3 from './web3';
import QuestionFactory from './build/QuestionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(QuestionFactory.interface),
  '0x8008021c1f1E685Af3a981D8Df41d0093C42A2eC'
);

export default instance;
