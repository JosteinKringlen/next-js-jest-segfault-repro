# Jest + custom Express server segfault repro

Install, build and run the tests
```bash
$ npm install
$ npm run build
$ npm test
```
All tests should pass without any errors.


To trigger the error; rename `example-next.config.js` to `next.config.js` and run the tests
```bash
$ npm test
```

This should result in something like:
```bash
[1]    16696 segmentation fault  npm test
```