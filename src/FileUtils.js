import {appendFile,createReadStream} from 'fs';
import {readline} from 'readline';

  export function saveUser(user) {
    return new Promise((resolve, reject) =>{
        appendFile("./users.txt", user.getJobCard() + "\n", err => {
        if(err) reject(err);
        resolve(user);
      });
    });
  };

  export function getUsers() {
    return new Promise((resolve, reject) =>{
      let lineReader = readline.createInterface({
        input: createReadStream('./users.txt')
      });
      let lines = [];
      lineReader.on('line', function (line) {
        lines.push(line);
      });
      lineReader.on('close', function() {
        resolve(lines);
      });
    });
  };