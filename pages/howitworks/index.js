import React, { Component } from 'react';
import Layout from '../../components/Layout';

class HowItWorksIndex extends Component {
  render() {
    return (
      <Layout>
        <div style={hiwStyle}>
          <h1>What is QandA?</h1>
          <p>QandA is a bug bounty platform that allows developers to
          incentivize others to solve problems.</p>
          <h1>How does it work?</h1>
          <p>Anyone with a MetaMask account can create a question or describe an
          issue they are having with a piece of software they are working on.
          The question is written into a smart contract, and the asker of the question
          can choose to set a bounty as a reward for another user solving their issue.</p>
          <p>Developers seeking to receive the bounty can submit an answer in hopes
          that their answer sufficiently solves the problem. Once a user submits a sufficient answer, the asker of
          the question approves that answer, and the bounty is paid to the user who submitted said answer.</p>
          <p>Developers can share links directly from GitHub issues, or post their
          issue directly into a smart contract, which is displayed on our site for others to see.</p>
          <p>Our aim is to help developers solve problems with their code,
          and to allow others to profit from solving problems.</p>
        </div>
      </Layout>
    );
  }
}

const hiwStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontSize: '18px'
}

export default HowItWorksIndex;
