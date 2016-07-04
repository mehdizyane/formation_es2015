"use strict";

var FileUtils = require('./FileUtils');

var Commands = function Commands() {};

Commands.extractCommandAndOptionsFromText = function (text) {
  var commandParts = text.split(" ");
  var name = commandParts[0];
  var args = commandParts.splice(1);
  if (name.charAt(0) == "@") {
    return {
      name: name.slice(1),
      args: args
    };
  }
  return null;
};

Commands.isValidCommand = function (text) {
  var command = Commands.extractCommandAndOptionsFromText(text);
  if (command) {
    return Commands.hasOwnProperty(command.name);
  }
  return false;
};

Commands.executeCommand = function (text) {
  var command;
  if (this.isValidCommand(text)) {
    command = Commands.extractCommandAndOptionsFromText(text);
    Commands[command.name].apply(null, command.args);
  }
};

Commands.showUsers = function () {
  FileUtils.getUsers(function (users) {
    for (var i = 0; i < users.length; i++) {
      console.log(users[i]);
    }
  });
};

if (typeof module != "undefined") module.exports = Commands;