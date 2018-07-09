import React from 'react';
import { Container } from 'semantic-ui-react';
// whatever you wrap in Head tags, gets put in the head tags of the html doc
import Head from 'next/head';
import Header from './Header';

export default props => {
  return (
    <Container>
      <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
