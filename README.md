# randomUUID

Polyfill for the `crypto.randomUUID()` method as proposed in
the [WICG randomUUID specification](https://github.com/WICG/uuid) and recently implemented in
[Node.js v15.6.0](https://github.com/nodejs/node/pull/36729).

## Usage

Require module to polyfill `crypto.randomUUID()` method.

```js
require('randomuuid')
```


NOTE: ESM `import`able version not yet available.  See
[this issue](https://github.com/uuidjs/randomUUID/issues/2) for status.
## API

See Node.js documentation for
[randomUUID()](https://nodejs.org/dist/latest-v15.x/docs/api/crypto.html#crypto_crypto_randomuuid_options)
for API usage.

Note: The current implementation is based on Node.js `lib/internal/crypto/random.js`, however the intent of this project is to follow the spec, so node-specific details (such as the `disableEntropyCache` option) may or may not survive in future versions.
