var generateQuestions = function (questions = [], user) {
  var question;

  if (questions.length == 0) {
    return {
      next: function () {
        return null;
      }
    }
  }

  return {
    next: function (text = '') {
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
          question = questions.find(function(q){
            return q.id == goto;
          });
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
          answers = question.answers.map(function({text}){
            return element.text;
          });
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

if(typeof(module) != "undefined")
  module.exports = generateQuestions;
