const FileUtils = require('./FileUtils');

const Commands = function() {};

Commands.extractCommandAndOptionsFromText = (text ='') => {
  let commandParts = text.split(" ");
  let [name, args] = commandParts;

  if(name.charAt(0) == "@") {
    return {
      name: name.slice(1),
      args: args.slice(1)
    }
  }
  return null;
};

Commands.isValidCommand = (text ='') => {
  let command = Commands.extractCommandAndOptionsFromText(text);
  if(command) {
    return Commands.hasOwnProperty(command.name);
  }
  return false;
};

Commands.executeCommand = (text ='') => {
  let command;
  if(this.isValidCommand(text)) {
    command = Commands.extractCommandAndOptionsFromText(text);
    Commands[command.name].apply(null, command.args);
  }
};

Commands.showUsers = function() {
  FileUtils.getUsers((users) => {
    users.forEach(user => console.log(user));
  });
};

if(typeof(module) != "undefined")
  module.exports = Commands;
