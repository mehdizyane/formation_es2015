import {fs} from 'fs';
import {readline} from 'readline';

export class FileUtils {
  saveUser(user) {
    return new Promise((resolve, reject) =>{
        fs.appendFile("./users.txt", user.getJobCard() + "\n", err => {
        if(err) {
          reject(err);
        }
        resolve();
      });
    });
  };

  getUsers(done) {
    return new Promise((resolve, reject) =>{
      let lineReader = readline.createInterface({
        input: fs.createReadStream('./users.txt')
      });

      let lines = [];

      lineReader.on('line', function (line) {
        lines.push(line);
      });

      lineReader.on('close', function() {
        done(lines);
      });
    });
  };
}