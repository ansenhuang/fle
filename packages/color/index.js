const styles = {
  // style
  bold: [ '\u001b[1m', '\u001b[22m' ],
  italic: [ '\u001b[3m', '\u001b[23m' ],
  underline: [ '\u001b[4m', '\u001b[24m' ],
  inverse: [ '\u001b[7m', '\u001b[27m' ],
  strikethrough: [ '\u001b[9m', '\u001b[29m' ],
  // color
  black: [ '\u001b[30m', '\u001b[39m' ],
  red: [ '\u001b[31m', '\u001b[39m' ],
  green: [ '\u001b[32m', '\u001b[39m' ],
  yellow: [ '\u001b[33m', '\u001b[39m' ],
  blue: [ '\u001b[34m', '\u001b[39m' ],
  magenta: [ '\u001b[35m', '\u001b[39m' ],
  cyan: [ '\u001b[36m', '\u001b[39m' ],
  white: [ '\u001b[37m', '\u001b[39m' ],
  gray: [ '\u001b[90m', '\u001b[39m' ],
  // bg
  bgBlack: [ '\u001b[40m', '\u001b[49m' ],
  bgRed: [ '\u001b[41m', '\u001b[49m' ],
  bgGreen: [ '\u001b[42m', '\u001b[49m' ],
  bgYellow: [ '\u001b[43m', '\u001b[49m' ],
  bgBlue: [ '\u001b[44m', '\u001b[49m' ],
  bgMagenta: [ '\u001b[45m', '\u001b[49m' ],
  bgCyan: [ '\u001b[46m', '\u001b[49m' ],
  bgWhite: [ '\u001b[47m', '\u001b[49m' ]
};

const alias = {
  input: 'gray',
  verbose: 'cyan',
  prompt: 'gray',
  info: 'green',
  data: 'gray',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
};

Object.keys(alias).forEach(key => {
  styles[key] = styles[alias[key]];
});

const cache = ['', ''];
const descriptors = {};
const color = (str) => {
  let result = cache[0] + str + cache[1];
  cache[0] = cache[1] = '';
  return result;
}

Object.keys(styles).forEach(key => {
  color[key] = null;
  descriptors[key] = {
    get () {
      cache[0] = styles[key][0] + cache[0];
      cache[1] = cache[1] + styles[key][1];
      return color;
    }
  }
});

Object.defineProperties(color, descriptors);

module.exports = color;
