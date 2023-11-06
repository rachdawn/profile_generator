const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";
let activity = "";
let music = "";
let meal = "";
let food = "";
let sport = "";
let superPower = "";

rl.question('What is your name? ', (answer) => {
    name = answer;
    rl.question('What is an activity you like doing? ', (answer) => {
      activity = answer;
      rl.question('What do you listen to while doing that? ', (answer) => {
        music = answer;
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
          meal = answer;
          rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
            food = answer;
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              sport = answer;
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                superPower = answer;
                rl.close();
                console.log(`${name} likes to listen to ${music} while ${activity}, eating ${food} for ${meal}, prefers ${sport} over other sports, and is great at ${superPower}`);
              });
            });
          });
        });
      });
    });
  });