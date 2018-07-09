const path = require('path');
// solidity compiler
const solc = require('solc');
// allows access to file system
// fs-extra has extra functions the fs module doesn't have
const fs = require('fs-extra');

// resolve is a function from the path module
const buildPath = path.resolve(__dirname, 'build');
// removeSync is an improved function from the fs-extra module
fs.removeSync(buildPath);

const contractPath = path.resolve(__dirname, 'contracts', 'QandA.sol');

const source = fs.readFileSync(contractPath, 'utf8');

const output = solc.compile(source, 1).contracts;

// ensureDirSync checks to see if a directory exists,
// if one doesn't exist, it will create one for us
fs.ensureDirSync(buildPath);

// console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
