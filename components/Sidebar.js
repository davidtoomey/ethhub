import React, { Component } from 'react';

const sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h3>QandA</h3>
      <a></a>
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

export default sidebar;
