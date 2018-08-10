import React from 'react';
import { Container } from 'semantic-ui-react';
// whatever you wrap in Head tags, gets put in the head tags of the html doc
import Head from 'next/head';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

const questionStyle = {
  marginLeft: '160px',
  padding: '0px 10px'
}

export default props => {
  return (
    <React.Fragment>
      <Sidebar />
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <link rel="stylesheet" type="text/css" href="./components.css"></link>
      </Head>
      <div style={questionStyle}>
        {props.children}
      </div>
    </React.Fragment>
  );
};
