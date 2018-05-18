# color

[![version](https://img.shields.io/npm/v/@fle/color.svg)](https://www.npmjs.org/package/@fle/color)

Stdout colorful log in terminal.

*Tips: It's a pure package without install others.*

## Installation

```console
npm install @fle/color
```

## Usage

```js
const color = require('@fle/color');

// color
console.log(color.green('green'));
console.log(color.help('help'));

// style
console.log(color.bold('bold'));

// background
console.log(color.bgRed('background red'));

// mixed
console.log(color.red.bgGreen.bold('red bgGreen bold'));
```

## API

### color

* gray
* black
* white
* green
* yellow
* blue
* red
* cyan
* magenta

### alias

* input = gray
* verbose = cyan
* prompt = gray
* info = green
* data = gray
* help = cyan
* warn = yellow
* debug = blue
* error = red

### style

* bold
* inverse
* underline
* italic (not work at mac)
* strikethrough (not work at mac)

### background

* bgBlack
* bgWhite
* bgGreen
* bgYellow
* bgBlue
* bgRed
* bgCyan
* bgMagenta
