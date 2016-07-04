const questions = require('./src/questions');

const generateQuestions =  require('./src/questionsGenerator');
const InputManager = require('./src/InputManager');
const User = require('./src/User');
const FileUtils = require('./src/FileUtils');
const Commands = require('./src/Commands');

const questionsGenerator = generateQuestions(questions, new User());

new InputManager(function(text = "") {
    if(Commands.isValidCommand(text)) {
      Commands.executeCommand(text);
      return;
    }

  const reply = questionsGenerator.next(text);

  if(reply instanceof User) {
    console.log("saving your info");
    FileUtils.saveUser(reply,
             function(user) {
               console.log(`Thank you ${user.getJobCard()}`);
               process.exit(0);
             },
             function(err) {
               console.log(err);
               process.exit(0);
             });
  } else if(reply.constructor === Array) {
    let answers = reply.reduce(function(exValue, currentValue){
      return `${exValue}, ${currentValue}`;
    });
    console.log(`I didn't understand... [ ${answers} ]`);
  }
  else console.log(reply);
});

console.log(questionsGenerator.next());
