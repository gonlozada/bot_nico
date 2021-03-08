var ks = require('node-key-sender');

setInterval(() => {
   ks.sendText('gonzalo')
}, 5000)