# randomUUID

Stub project for polyfilling `randomUUID` as proposed for standardization in
https://github.com/WICG/uuid and implemented in
[Node.js v15.6.0](https://github.com/nodejs/node/pull/36729).

## Usage

Just `require()` this package as soon as possible in your project, so its
functionality is available for other modules:

```js
require('randomuuid')
```

it will automatically detect and apply the polyfill functions in place, both in
Node.js and browser code.

TODO: generate ESM version, so it can be directly importable by browsers, or
better than that, confirm it's possible to write the polyfill directly on it.

## API

See Node.js documentation for
[randomUUID()](https://nodejs.org/dist/latest-v15.x/docs/api/crypto.html#crypto_crypto_randomuuid_options)
for API usage.

Code is based on Node.js' `lib/internal/crypto/random.js`, so browser
implementation (and by extension, Node.js `crypto.webcrypto` too) has some
Node.js extra functionality that could not be available in future versions of
the spec, more specifically the `disableEntropyCache` flag. This project intents
to be keep up to date to the spec once it defines a browser API on itself.
