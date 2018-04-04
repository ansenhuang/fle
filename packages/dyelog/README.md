# dyelog

[![version](https://img.shields.io/npm/v/@fle/dyelog.svg)](https://www.npmjs.org/package/@fle/dyelog)

Stdout colorful log in terminal.

*Tips: It's a pure package without install others.*

## Installation

```console
npm install @fle/dyelog
```

## Usage

```js
const dyelog = require('@fle/dyelog');

// color
dyelog.green('green');
dyelog.help('help');

// style
dyelog.bold('bold');

// background
dyelog.bgRed('background red');

// mixed
dyelog.red.bgWhite.bold('red bgGreen bold');
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
