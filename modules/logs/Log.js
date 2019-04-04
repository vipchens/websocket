require('../utils/dateFormat');
const fs = require('fs');
const path = require('path');

class Log {
  constructor () {
    this.date = new Date();
    this.logsPath = path.join(process.cwd(), 'logs');
    this.folderPath = path.join(this.logsPath, this.date.getFullYear() + '-' + (this.date.getMonth() + 1));
    this.errFilePath = path.join(this.folderPath, this.date.getDate() + '.err.log');
    this.infoFilePath = path.join(this.folderPath, this.date.getDate() + '.info.log');
    if (!this.folderExists()) this.createFolder();
    if (!this.fileExists(this.errFilePath)) this.createFile(this.errFilePath);
    if (!this.fileExists(this.infoFilePath)) this.createFile(this.infoFilePath);
  }

  folderExists () {
    return fs.existsSync(this.folderPath);
  }

  fileExists (filePath) {
    return fs.existsSync(filePath);
  }
  
  createFolder () {
    // recursive 属性（指示是否应创建父文件夹）的对象
    fs.mkdir(this.folderPath, { recursive: true }, err => {
      if (err) throw err;
    })
  }

  createFile (filePath) {
    fs.writeFile(filePath, 'dd', 'utf8', err => {
      if (err) throw err;
    })
  }

  info (log) {
    this.write('info', log);
  }

  err (log) {
    this.write('err', log);
  }

  write (type, log) {
    let message = new Date().format("yyyy-MM-dd hh:mm:ss") + ` ${log}` + '\n';
    fs.appendFile(path.join(this.folderPath, this.date.getDate() + `.${type}.log`), message, 'utf8', err => {
      if (err) throw err;
    })
  }
}

module.exports = Log;