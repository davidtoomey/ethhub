import React, { Component } from 'react';
import { Link } from '../routes';

const sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h2 style={{ paddingBottom: '10px' }}>QandA</h2>
      <div style={spacingStyle}>
        <h3>
          <Link route={'/questions/new'} prefetch>
            <a style={linkStyle}>Create Question</a>
          </Link>
        </h3>
      </div>
      <div style={spacingStyle}>
        <h3>
          <Link route={'/'} prefetch>
            <a style={linkStyle}>How it Works</a>
          </Link>
        </h3>
      </div>
    </div>
  );
}

const sidebarStyle = {
  height: '100%',
  width: '160px',
  backgroundColor: '#000000',
  position: 'absolute',
  color: 'white',
  top: '0',
  left: '0',
  overflowX: 'hidden',
  padding: '10px 50px'
}

const linkStyle = {
  color: 'white'
}

const spacingStyle = {
  paddingBottom: '10px'
}

export default sidebar;
