export var generateQuestions = function (questions = [], user) {
  var question;

  if (questions.length == 0) {
    return {
      next: () => null
    }
  }

  return {
    next: (text = '') => {
      let i;
      let answers = [];
      let foundAnswer;

      if(!question) {
        question = questions[0];
        return question.text;
      }

      if (question.answerMapTo) {
        let {property, goto} = question.answerMapTo;
        user[property] = text;
        if (!goto) return user;
        else {
          question = questions.find(({id}) => id == goto);
          return question.text;
        }
      } else if (question.answers) {
        for(let answer of question.answers){
          if (answer.text === text) {
            foundAnswer = answer;
            break;
          }
        }
        if (!foundAnswer) {
          answers = question.answers.map(({text}) => text);
          return answers;
        }
        else if (!foundAnswer.goto) return user;
        else {
          for(let q of questions){
            if (q.id == foundAnswer.goto) {
              question = q;
              break;
            }
          }
          return question.text;
        }
      }
    }
  };
};