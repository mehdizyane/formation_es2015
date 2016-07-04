"use strict";

var generateQuestions = function generateQuestions(questions, user) {
  var question;

  if (questions == undefined || questions.length == 0) {
    return {
      next: function next() {
        return null;
      }
    };
  }

  return {
    next: function next(text) {
      var i;
      var answers = [];
      var foundAnswer;

      if (!question) {
        question = questions[0];
        return question.text;
      }

      if (question.answerMapTo) {
        user[question.answerMapTo.property] = text;
        if (!question.answerMapTo.goto) return user;else {
          for (i = 0; i < questions.length; i++) {
            if (questions[i].id == question.answerMapTo.goto) {
              question = questions[i];
              break;
            }
          }
          return question.text;
        }
      } else if (question.answers) {
        for (i = 0; i < question.answers.length; i++) {
          if (question.answers[i].text === text) {
            foundAnswer = question.answers[i];
            break;
          }
        }
        if (!foundAnswer) {
          for (i = 0; i < question.answers.length; i++) {
            answers.push(question.answers[i].text);
          }
          return answers;
        } else if (!foundAnswer.goto) return user;else {
          for (i = 0; i < questions.length; i++) {
            if (questions[i].id == foundAnswer.goto) {
              question = questions[i];
              break;
            }
          }
          return question.text;
        }
      }
    }
  };
};

if (typeof module != "undefined") module.exports = generateQuestions;