import {questions} from './src/questions';

import {generateQuestions} from './src/questionsGenerator';
import {InputManager} from './src/InputManager';
import {User} from './src/User';
import {FileUtils} from './src/FileUtils';
import {Commands} from './src/Commands';

const questionsGenerator = generateQuestions(questions, new User());

new InputManager(function(text = "") {
    if(Commands.isValidCommand(text)) {
      Commands.executeCommand(text);
      return;
    }

  const reply = questionsGenerator.next(text);

  if(reply instanceof User) {
    console.log("saving your info");
    FileUtils.saveUser(reply).then(user =>{
      console.log(`Thank you ${user.getJobCard()}`);
    })
    .catch(err=>console.log(err))
    .then(data => process.exit(0));
  } else if(reply.constructor === Array) {
    let answers = reply.reduce(function(exValue, currentValue){
      return `${exValue}, ${currentValue}`;
    });
    console.log(`I didn't understand... [ ${answers} ]`);
  }
  else console.log(reply);
});

console.log(questionsGenerator.next());
