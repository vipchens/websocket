const socket = require("./modules/socket/Server");
const Log = require("./modules/logs/Log");

let id = 0;                   // socket连接id
let socketConnection = [];    // socket连接池
let log = new Log();

socket.on('connection', ws => {
  ws.id = id;                 // 设置连接id
  socketConnection.push(ws);  // 加入连接池
  welcome(id);                // 欢迎语
  id++;                       // 递增链接id
  onMessage();                // 绑定message事件
});

const welcome = id => {
  console.log(`id:${id} login...`);
  socketConnection[id].send(`hello your id: ${id}`, err => {
    if (err) {
      log.err(`welcome send err ${err} !`);
      return;
    }
    log.info(`Customer login`);
  });
};

const onMessage = () => {
  for(let i = 0; i < socketConnection.length; i++) {
    // 为每一个连接绑定message事件
    if (typeof socketConnection[i]._events.message !== 'function') {
      socketConnection[i].on('message', message => {
        
        // setTimeout(() => {
        //   Send(socketConnection[i], message);
        // }, 5000)
      });
    }
  }
};

// 发送信息
const Send = (ws, message) => {
  log.info(`send message: ${message} !`);
  ws.send(message);
};
