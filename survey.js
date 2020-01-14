const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let allAnswers = {};

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  allAnswers.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
     allAnswers.activity = answer;
     rl.question("What do you listen to while doing that? ", (answer) => {
       allAnswers.listen = answer; 
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        allAnswers.meal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          allAnswers.dish = answer;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            allAnswers.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              allAnswers.superpower = answer;
              console.log(`Your name is ${allAnswers.name}. You like to ${allAnswers.activity}. You like to listen to ${allAnswers.listen}. Your favourite meal is ${allAnswers.meal}. Your favourite thing to eat for that meal is ${allAnswers.dish}. Your favourite sport is ${allAnswers.sport}. Your superpower is ${allAnswers.superpower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});

// questions(allAnswers);
console.log(allAnswers);


//we have to repeat all answers (question)
//rl.close() closes interface
//

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
