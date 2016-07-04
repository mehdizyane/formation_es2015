const FileUtils = require('./FileUtils');

const Commands = function() {};

Commands.extractCommandAndOptionsFromText = function(text='') {
  let commandParts = text.split(" ");
  let [name, args] = commandParts;

  if(name.charAt(0) == "@") {
    return {
      name: name.slice(1),
      args: args.splice(1)
    }
  }
  return null;
};

Commands.isValidCommand = function(text= '') {
  let command = Commands.extractCommandAndOptionsFromText(text);
  if(command) {
    return Commands.hasOwnProperty(command.name);
  }
  return false;
};

Commands.executeCommand = function(text='') {
  let command;
  if(this.isValidCommand(text)) {
    command = Commands.extractCommandAndOptionsFromText(text);
    Commands[command.name].apply(null, command.args);
  }
};

Commands.showUsers = function() {
  FileUtils.getUsers(function (users) {
    users.forEach(function(element){
      console.log(users[i]);
    });
  });
};

if(typeof(module) != "undefined")
  module.exports = Commands;
