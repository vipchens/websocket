const webSocket = require('ws');
const webSocketServer = new webSocket.Server({
  port: 3000
});
module.exports = webSocketServer;