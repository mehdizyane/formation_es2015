'use strict';

var questions = require('./src/questions');

var generateQuestions = require('./src/questionsGenerator');
var InputManager = require('./src/InputManager');
var User = require('./src/User');
var FileUtils = require('./src/FileUtils');
var Commands = require('./src/Commands');

var questionsGenerator = generateQuestions(questions, new User());

var inputMgr = new InputManager(function (text) {
  if (Commands.isValidCommand(text)) {
    Commands.executeCommand(text);
    return;
  }

  var reply = questionsGenerator.next(text);

  if (reply instanceof User) {
    console.log("saving your info");
    FileUtils.saveUser(reply, function (user) {
      console.log("Thank you " + user.getJobCard());
      process.exit(0);
    }, function (err) {
      console.log(err);
      process.exit(0);
    });
  } else if (reply.constructor === Array) {
    var answers = "";
    for (var i = 0; i < reply.length; i++) {
      if (i == 0) answers += reply[i];else answers += ', ' + reply[i];
    }
    console.log("I didn't understand... [" + answers + "]");
  } else console.log(reply);
});

console.log(questionsGenerator.next());