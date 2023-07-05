const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "1. What is your name? Nicknames are also acceptable :) ",
  "2. What is an activity you like doing? ",
  "3. What do you listen to while doing that? ",
  "4. Which meal is your favourite? (eg. dinner, brunch, etc.) ",
  "5. Which sport is your absolute favourite? ",
  "6. What is your superpower? In a few words, tell us what you are amazing at! ",
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
      console.log('================');
      console.log(`
      ${answersArray[0]} is someone who likes to ${answersArray[1]},
      while they are listening to ${answersArray[2]}. ${answersArray[0]}'s favourite meal is
      ${answersArray[3]}. ${answersArray[0]} is crazy about ${answersArray[4]}. 
      The juiciest thing about ${answersArray[0]} is that their superpower is ${answersArray[5]}.
      `);
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

