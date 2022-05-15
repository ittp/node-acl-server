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
