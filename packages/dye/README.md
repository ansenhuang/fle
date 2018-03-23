# dye

Stdout colorful log in terminal.

*Tips: It's a pure package without install others.*

## Installation

```console
npm install @fle/dye
```

## Usage

```js
const dye = require('@fle/dye');

// color
console.log(dye.green('green'));
console.log(dye.help('help'));

// style
console.log(dye.bold('bold'));

// background
console.log(dye.bgRed('background red'));

// mixed
console.log(dye.red.bgWhite.bold('red bgGreen bold'));
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
