// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

class ACL {}
let debug = true;
let isDebug = debug == true;

class Config {
  render() {
    console.log('render');

    return { key: 1, data: '1' };
  }
}

let os = require('node:os');

console.log(os);

const { spawn } = require('os');

let arch = os.arch()

;


