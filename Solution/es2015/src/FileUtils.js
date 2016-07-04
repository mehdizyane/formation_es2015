import fs from 'fs'
import readline from 'readline'

export function saveUser(user) {
  return new Promise((resolve, reject) => {
    fs.appendFile("./users.txt", `${user.getJobCard()}\n`, function(err) {
      if(err) {
        return reject(err);
      }
      resolve(user);
    });
  });
}

export function getUsers() {
  return new Promise((resolve, reject) => {
    let lineReader = readline.createInterface({
      input: fs.createReadStream('./users.txt')
    });

    let lines = [];

    lineReader.on('line', function (line) {
      lines.push(line);
    });

    lineReader.on('close', () => {
      resolve(lines);
    });
  });
}