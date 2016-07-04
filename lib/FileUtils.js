'use strict';

var fs = require('fs');
var readline = require('readline');

function saveUser(user, success, error) {
  fs.appendFile("./users.txt", user.getJobCard() + "\n", function (err) {
    if (err) {
      return error(err);
    }
    success(user);
  });
}

function getUsers(done) {
  var lineReader = readline.createInterface({
    input: fs.createReadStream('./users.txt')
  });

  var lines = [];

  lineReader.on('line', function (line) {
    lines.push(line);
  });

  lineReader.on('close', function () {
    done(lines);
  });
}

if (typeof module != "undefined") module.exports = {
  saveUser: saveUser,
  getUsers: getUsers
};