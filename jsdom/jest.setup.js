window.crypto = require('crypto').webcrypto

// Based on https://github.com/facebook/jest/issues/9983#issuecomment-626489847
if (typeof TextDecoder === 'undefined') {
 global.TextDecoder = require('util').TextDecoder
}
