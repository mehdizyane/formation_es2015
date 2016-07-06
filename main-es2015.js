import {questions} from './src/questions';

import {generateQuestions} from './src/questionsGenerator';
import {InputManager} from './src/InputManager';
import {User} from './src/User';
import {saveUser} from './src/FileUtils';
import {Commands} from './src/Commands';

const questionsGenerator = generateQuestions(questions, new User());
new InputManager(function(text = "") {
  if(Commands.isValidCommand(text)) {
    Commands.executeCommand(text);
    return;
  }

  async function ayncSaveUser(reply){
    try{
      let user = await saveUser(reply);
      console.log(`Thank you ${user.getJobCard()}`);
    }catch(err){
      err=>console.log(err);
    }
  };

  let {value:reply,done} = questionsGenerator.next(text);
  if(Array.isArray(reply)) {
    let answers = reply.reduce((initial,answer) => initial == "" ? answer : `${initial}, ${answer}`, '');
    console.log(`I didn't understand... [${answers}]`)
  }
  else if(done) {
    console.log("saving your info");
    ayncSaveUser(reply).then(process.exit(0));
  } else  {
    console.log(reply);
  }
});
console.log(questionsGenerator.next().value);
