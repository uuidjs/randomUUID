# randomUUID

Stub project for polyfilling `randomUUID` as proposed for standardization in
https://github.com/WICG/uuid and implemented in Node.js v15.6.0
https://github.com/nodejs/node/pull/36729


### `crypto.randomUUID([options])`
<!-- YAML
added: REPLACEME
-->

* `options` {Object}
  * `disableEntropyCache` {boolean} By default, to improve performance,
    Node.js will pre-emptively generate and persistently cache enough
    random data to generate up to 128 random UUIDs. To generate a UUID
    without using the cache, set `disableEntropyCache` to `true`.
    **Defaults**: `false`.
* Returns: {string}

Generates a random [RFC 4122][] Version 4 UUID.

[RFC 4122]: https://www.rfc-editor.org/rfc/rfc4122.txt
