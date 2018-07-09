import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Question from '../ethereum/question';

class SetBountyForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const question = Question(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = await web3.eth.defaultAccount;
      await question.methods.setBounty().send({
        from: defaultAccount,
        value: web3.toWei(this.state.value, 'ether')
      });
      Router.replaceRoute(`/questions/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Set Bounty</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              label="ether"
              labelPosition="right"
            />
          </Form.Field>
          <Button primary color="green" loading={this.state.loading} onClick={this.onSubmit}>Set Bounty</Button>
        </Form>
    );
  }
}

export default SetBountyForm;
