export const questions = [
  {
    id:1,
    text:"Hello, how are you?",
    answers:[
      {text:"fine",goto:2},
      {text:"bad",goto:3}
    ]
  },
  {
    id:2,
    text: "Great! Is it sunny where you leave?",
    answers:[{text:'yes',goto:4},{text:'no',goto:4}],
  },
  {
    id:3,
    text: "What happened?",
    answers: [
      {text:"bad day",goto:4}
    ]
  },
  {
    id:4,
    text:"What is your firstname?",
    answerMapTo: {property:"firstname",goto:5}
  },
  {
    id:5,
    text:"What is your lastname?",
    answerMapTo: {property:"lastname",goto:6}
  },
  {
    id:6,
    text:"What is your job title?",
    answerMapTo: {property:"jobTitle", goto:7}
  },
  {
    id:7,
    text:"What is you badge number?",
    answerMapTo:{property:"badgeNumber"}
  }
];