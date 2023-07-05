const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name? Nicknames are also acceptable :) ",
  "What is an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite? (eg. dinner, brunch, etc.) ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

const answerGetter = (elm, callback) => {
  rl.question(elm, (answer) => {
    callback(answer);
  });
};

const survey = (questions) => {
  const answersArray = [];
  let currentIndex = 0;

  
  const nextAnswer = () => {
    if (currentIndex === questions.length) {
      console.log(answersArray);
      rl.close();
      return;
    }

    answerGetter(questions[currentIndex], (answer) => {
      answersArray.push(answer);
      currentIndex++;
      nextAnswer();
    });
  };

  nextAnswer();
};

survey(questions);

