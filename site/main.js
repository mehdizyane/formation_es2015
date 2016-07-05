import {questions} from '../src/questions';
import {generateQuestions} from '../src/questionsGenerator';
import {User} from '../src/User';

var questionsGenerator = generateQuestions(questions, new User());

var textBox = document.getElementById('textBox');
var chat = document.getElementById('chat');

document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault();

  var text = textBox.value;

  textBox.value = "";

  addToChat("> <i>" + text + "</i>");

  var reply = questionsGenerator.next(text);

  if(reply.constructor == Array) {
    var answers = reply.reduce(function(exValue, currentValue , index){
      var result;
      if(index == 0) result += result[index];
      else result += ', ' + result[index];
      return result;
    });
    addToChat("I didn't understand... [" + answers + "]");
  }
  else if(reply instanceof User) {
    console.log(reply);
    document.getElementById('sendButton').disabled = true;
  }
  else addToChat(reply);

  textBox.focus();
  chat.scrollTop = chat.scrollHeight;
});

function addToChat(text) {
  chat.innerHTML += "<br/>" + text;
}

addToChat(questionsGenerator.next());
textBox.focus();
