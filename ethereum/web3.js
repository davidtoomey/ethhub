import Web3 from 'web3';
// this file creates an instance of web3 to be used..
// in other files
let web3;

// this if statement checks to see if we are on..
// the server or on the browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser AND metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user isn't running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;

// this file gets executed 2 times
// one time on the nextjs server
// then again in the browser

// the reason why initially the window is not defined..
// error happened is because window in not accessible
// on the server, only on the browser
