

export function *generateQuestions(questions = [], user) {
  if(questions.length ==  0) return;

  let question = questions[0];
  let answer = yield question.text;

  while(true) {

    if(question.answerMapTo) {
      let {property,goto} = question.answerMapTo;
      user[property] = answer;
      if(!goto) return user;
      else {
        question = questions.find( ({id}) => id == goto);
        answer = yield question.text;
      }
    } else if(question.answers) {
      let foundAnswer = question.answers.find(({text}) => text.toLowerCase() == answer.toLowerCase());
      if(!foundAnswer) answer = yield question.answers.map(({text}) => text);
      else if(!foundAnswer.goto) return user;
      else {
        question = questions.find(({id}) => id == foundAnswer.goto);
        answer = yield question.text;
      }
    }
  }
}