import {saveUser, getUsers} from './FileUtils'

export class Commands {
  static extractCommandAndOptionsFromText(text) {
    let commandParts = text.split(" ");
    let [name,...args] = commandParts;
    if(name.startsWith("@")) {
      return {
        name: name.slice(1),
        args
      }
    }
    return null;
  }

  static isValidCommand(text) {
    let command = Commands.extractCommandAndOptionsFromText(text);
    if(command) {
      return Commands.hasOwnProperty(command.name);
    }
    return false;
  }

  executeCommand(text) {
      let {name,args} = Commands.extractCommandAndOptionsFromText(text);
      Commands[name](...args);
  }

  static showUsers(...args) {
    getUsers().then(users => {
      users.forEach(user => console.log(user));
    });
  }
}

export function CommandsFactory() {
  return new Proxy(
    new Commands(),{
    get: function(target, name, receiver) {
      if(name == "executeCommand") {
        return new Proxy(
          Reflect.get(target, name, receiver), {
          apply(target, targetThis, args) {
            if (Commands.isValidCommand(args[0])) {
              Reflect.apply(target, targetThis, args);
              return true;
            }
            console.log(`Command not found ${args[0]}`);
            return false;
          }
        });
      } else {
        Reflect.get(target, name, receiver);
      }
    }
  });
}