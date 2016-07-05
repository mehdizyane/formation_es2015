import FileUtils from './FileUtils';

export class Commands {

  constructor(){}

  extractCommandAndOptionsFromText(text ='') {
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

  isValidCommand(text =''){
    let command = extractCommandAndOptionsFromText(text);
    if(command) {
      return hasOwnProperty(command.name);
    }
    return false;
  };

  executeCommand(text =''){
    let command;
    if(this.isValidCommand(text)) {
      command = extractCommandAndOptionsFromText(text);
      this[command.name].apply(null, command.args);
    }
  };

  showUsers(){
    FileUtils.getUsers().then((users) => {
      users.forEach(user => console.log(user));
    });
  };
}