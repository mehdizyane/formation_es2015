import {getUsers} from './FileUtils';

export class Commands {

  constructor(){}

  static extractCommandAndOptionsFromText(text ='') {
    let commandParts = text.split(" ");
    let [name,...args] = commandParts;
    if(name.startsWith("@")) {
      return {
        name: name.slice(1),
        args
      }
    }
    return null;
  };

  static isValidCommand(text =''){
    let command = Commands.extractCommandAndOptionsFromText(text);
    if(command) {
      return Commands.hasOwnProperty(command.name);
    }
    return false;
  };

  static executeCommand(text =''){
    let command;
    if(Commands.isValidCommand(text)) {
      command = Commands.extractCommandAndOptionsFromText(text);
      this[command.name].apply(null, command.args);
    }
  };

  static showUsers(){
    getUsers().then(users => {
      users.forEach(user => console.log(user));
    });
  };
}