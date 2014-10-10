9000
=========

Comparison engine to evaluate a user's input against the number 9000.

## Installation

  npm install 9000 --save

## Usage

  var 9000 = require('9000')
      escape = 9000.escape,
      unescape = 9000.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release