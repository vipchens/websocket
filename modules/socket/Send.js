const fs = require("fs")

export const send = (ws, message) => {
  ws.send(message, err => {
      if (err) {
        log.err(`send err ${err} !`);
        return;
      }
  });
}