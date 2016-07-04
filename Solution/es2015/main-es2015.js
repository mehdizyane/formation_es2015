import questions from './src/questions'
import {generateQuestions} from './src/questionsGenerator'
import {InputManager} from './src/InputManager'
import {User} from './src/User'
import {saveUser} from './src/FileUtils'
import {CommandsFactory, Commands} from './src/Commands'

let questionsIt = generateQuestions(questions, new User());

let inputMgr = new InputManager(text => {
  if(CommandsFactory().executeCommand(text)) return;

  let {value:reply,done} = questionsIt.next(text);

  if(Array.isArray(reply)) {
    let answers = reply.reduce((initial,answer) => initial == "" ? answer : `${initial}, ${answer}`, '');
    console.log(`I didn't understand... [${answers}]`)
  }
  else if(done) {
    console.log("saving your info");
    saveUser(reply)
      .then((user) => {
        console.log(`Thank you ${user.getJobCard()}`);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        process.exit(0);
      });
  }
  else console.log(reply);
});

console.log(questionsIt.next().value);