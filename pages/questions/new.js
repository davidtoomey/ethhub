import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
// using lowercase factory because this is an instance
// of a contract
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import axios from 'axios';

class QuestionNew extends Component {
  state = {
    qString: '',
    errorMessage: '',
    loading: false
  };

  // using a fat arrow function to avoid funky bind syntax
  // on the form itself
  onSubmit = async (event) => {
    // prevents browser from submitting the form right away
    event.preventDefault();

    // start the button spinner
    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
      // don't need to specify gas amount, metaMask estimates that for us
      await factory.methods
        .createQuestion(this.state.qString)
        .send({
          from: accounts[0]
        });

      // axios post request to create question
      // in mongoDB
      axios.post('/api/questions/new', {
        asker: defaultAccount,
        questionString: this.state.qString
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
      // end axios

      // '/'
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    // stop the button spinner
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Question</h3>

        <h1>New Questions</h1>
        {/* no parentheses on onSubmit because we don't want it to run right away
        only want it to pass an instance of the function to the form to
        execute when needed */}
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Your Question</label>
            <Input
              onChange={event => this.setState({ qString: event.target.value })}
              value={this.state.qString}
            />
          </Form.Field>

          <Message error header="oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default QuestionNew;
