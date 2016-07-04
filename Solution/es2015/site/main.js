import questions from '../src/questions'
import {generateQuestions} from '../src/questionsGenerator'
import {User} from '../src/User'

let questionsIt = generateQuestions(questions, new User());

let textBox = document.getElementById('textBox');
let chat = document.getElementById('chat');

document.getElementById('sendButton').addEventListener('click', (event) => {
  event.preventDefault();

  let text = textBox.value;

  textBox.value = "";

  addToChat(`> <i>${text}</i>`);

  let {value:reply,done} = questionsIt.next(text);

  if(Array.isArray(reply)) {
    let answers = reply.reduce((initial,answer) => initial == "" ? answer : `${initial}, ${answer}`, '');
    addToChat(`I didn't understand... [${answers}]`);
  }
  else if(done) {
    console.log(reply);
    document.getElementById('sendButton').disabled = true;
  }
  else addToChat(reply);

  textBox.focus();
  chat.scrollTop = chat.scrollHeight;
});

function addToChat(text) {
  chat.innerHTML = `${chat.innerHTML}<br/>${text}`;
}

addToChat(questionsIt.next().value);
textBox.focus();