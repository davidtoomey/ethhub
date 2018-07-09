import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Question from '../../ethereum/question';
import AnswerForm from '../../components/AnswerForm';
import SetBountyForm from '../../components/SetBountyForm';
import AnswerGrid from '../../components/AnswerGrid';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class QuestionShow extends Component {
  state ={
    isAsker: false
  };

  static async getInitialProps(props) {
    const question = Question(props.query.address);
    const address = props.query.address;
    const summary = await question.methods.getSummary().call();

    return {
      questionString: summary[0],
      bounty: summary[1],
      answers: summary[2],
      asker: summary[3],
      answerApproved: summary[4],
      address
    };
  }

  async componentWillMount() {
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts[0];
    const { asker } = this.props;

    if (defaultAccount == asker) {
      this.setState({isAsker: true});
    } else {
      this.setState({isAsker: false});
    }
  }

  renderCards() {
    const {
      questionString,
      bounty,
      answers,
      asker,
      address
    } = this.props;

    const items = [
      {
        header: questionString,
        meta: '',
        description: '',
        style: { overflowWrap: 'break-word', fluid: true }
      },
      {
        header: asker,
        description: 'The asker of this question.',
        style: { overflowWrap: 'break-word', fluid: true }
      },
      {
        header: web3.utils.fromWei(bounty, 'ether') + ' ETH',
        description: 'Bounty for answering this question.'
      },
      {
        header: answers + ' answers',
        description:
          <Link route={`/questions/${this.props.address}/answers`}>
            <a>
              <Button primary style={{ marginTop: '10px' }}>View Answers</Button>
            </a>
          </Link>,
        style: { overflowWrap: 'break-word', fluid: true }
      },
      {
        header: address,
        description: 'Question Contract Address',
        style: { overflowWrap: 'break-word', fluid: true }
      }
    ];

    return <Card.Group items={items} />;
  }

  submitBounty = async () => {
    await question.methods.setBounty().call();
  }

  render() {
    return (
      <Layout>
        <h3>Question</h3>
        <Grid>
          <Grid.Row>
            { this.state.isAsker &&
              <div style={{ marginBottom: '15px' }}>
                <h5 style={{ display: 'inline-block', marginBottom: '15px'  }}>
                  <div style={{ color: '#32CD32' }}>You are the asker of this question.</div> You can <div style={{ color: 'red', display: 'inline-block' }}>set the bounty in the form below</div>, then approve the correct answer to pay out the bounty.
                </h5>
              </div>
            }
            <Grid.Column width={16}>
              {this.renderCards()}
              <br />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              { this.state.isAsker ? <SetBountyForm address={this.props.address} /> : <AnswerForm address={this.props.address} /> }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default QuestionShow;
