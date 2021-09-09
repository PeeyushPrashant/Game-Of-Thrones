var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName= readlineSync.question("May I have your name? ");

console.log("Welcome "+chalk.bold(userName)+ " to a quiz on "+ chalk.bold.bgGreenBright("GAME OF THRONES\n\n"));

var score=0;

var questionList=[{
  question: chalk.bold.blueBright("(1) _______ is the youngest of Ned Stark's children.\n\n") + " a. Arya\n b.Sansa\n c. Bran\n d. Rickon\n\n" + chalk.bold("->"),
  answer: "d"
}, {
  question: chalk.bold.blueBright("(2) Who is Jon Snow's mother?\n\n") + " a. Cersei Lannister\n b. Lysa Arryn\n c. Lyanna Stark\n d. Catelyn Stark\n\n" + chalk.bold("->"),
  answer:"c"
}, {
  question: chalk.bold.blueBright("(3) Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies?\n\n") + " a. Alliser Thorne\n b. Beric Dondarrion\n c. Jaqen H'ghar\n d. Barristen Selmy\n\n" + chalk.bold("->"),
  answer:"b" 
}, {
  question: chalk.bold.blueBright("(4) What’s the name of the band of assassins that Arya Stark joins in Braavos?\n\n") + " a. Faceless Mens\n b. Second Sons\n c. Brotherhood wiithout banners\n d. Sons of the harpy\n\n" + chalk.bold("->"),
  answer:"a"
}, {
  question: chalk.bold.blueBright("(5) Dany’s dragons are (or were) called Drogon, Viserion and ____?\n\n") + " a. Dougal\n b. Vhagar\n c. Rhaegal\n d. Balerion\n\n" + chalk.bold("->"),
  answer:"c"
}];

var highScore= [{
  name:"Shivam",
  scoreH:"5"
},{
  name:"Kunal",
  scoreH:"4"
},{
  name:"Karan",
  scoreH:"3"
}]

for(var i=0; i<questionList.length; i++){
 var question =questionList[i].question;
 var answer = questionList[i].answer;
 display(question,answer);
}

function printScoreCard(highScore)
{
  for(var i=0; i<highScore.length; i++)
  {
    console.log(chalk.bold.yellow(highScore[i].name+":"+ highScore[i].scoreH));
  }
}

function display(question, answer){
 var userAnswer=readlineSync.question(question);

 if(userAnswer === answer){
    console.log(chalk.bold.cyanBright("You're right\n"));
    score=score+1;
    console.log("Your current score: " + chalk.bold.yellow(score)+"\n");
 }
 else{
   console.log(chalk.bold.red("You're wrong\n"));
   console.log("Your current score: " + chalk.bold.yellow(score)+"\n");
 }
}

console.log(chalk.bold.yellow("\n******Check the ScoreCard*****\n"));
printScoreCard(highScore);

var newHighScore=false;

for(var i=0; i<highScore.length; i++)
{
  if(score>=highScore[i].scoreH)
  {
    highScore.splice(i,1,{name:`${userName}`,scoreH:`${score}`});
    newHighScore=true;
    break;
  }
}

if(newHighScore)
{
  console.log(chalk.bold.green("\nYou have beaten the highscore,kindly send a screeshot"));
  console.log(chalk.bold.yellow("\n***LeaderBoard***\n"));
  printScoreCard(highScore);
}

console.log("\nCongrats🔥, Your total score is: "+ chalk.bold.yellow(score));