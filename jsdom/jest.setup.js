const {randomFillSync: getRandomValues, webcrypto} = require('crypto')

if(!window.crypto) window.crypto = webcrypto || {getRandomValues}
