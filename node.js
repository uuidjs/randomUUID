const crypto = require('crypto');

require('./polyfill')(crypto);

let { webcrypto } = crypto;
if (!webcrypto) crypto.webcrypto = webcrypto = {};

if (!webcrypto.randomUUID) webcrypto.randomUUID = crypto.randomUUID;
