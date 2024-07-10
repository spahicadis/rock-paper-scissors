//global
let playerScore = 0;
let computerScore = 0;
const maxRonuds = 3;
const choices = ['rock', 'paper', 'scissors']
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
const computerMove = randomChoices; 
let playerMove = null;

//dom
let startSection = document.querySelector('.start');
let mainSection = document.querySelector('.playingScreen');
const buttonPlay = document.querySelector('.play');
let playerScoreStatus = document.querySelector('.playerScore')
let computerScoreStatus = document.querySelector('.computerScore');
let playerMove1 = document.querySelector('.actionRock');
let playerMove2 = document.querySelector('.actionPaper');
let playerMove3 = document.querySelector('.actionScissors');

//displayScreen
function changeToMainScreen() {
  startSection.classList.add('display-none');
  mainSection.classList.add('playingScreenActive');  
}
buttonPlay.addEventListener('click', changeToMainScreen);


//biding
playerMove1.addEventListener('click', function(e) {
 playerMove = e.target.id;
 if(computerMove == 'rock') {
  console.log('draft')
 } else if(computerMove == 'paper') {
  computerScoreStatus.innerHTML = `${++computerScore}`
 } else if(computerMove == 'scissors') {
  playerScoreStatus.innerHTML = `${++playerScore}`
 }
})
playerMove2.addEventListener('click', function(e) {
  playerMove = (e.target.id);
  if(computerMove == 'rock') {
    playerScoreStatus.innerHTML = `${++playerScore}`
   } else if(computerMove == 'paper') {
    console.log(`draft`)
   } else if(computerMove == 'scissors') {
    computerScoreStatus.innerHTML = `${++computerScore}`
   }
})
playerMove3.addEventListener('click', function(e) {
  playerMove = (e.target.id);
  if(computerMove == 'rock') {
    computerScoreStatus.innerHTML = `${++computerScore}`
   } else if(computerMove == 'paper') {
    playerScoreStatus.innerHTML = `${++playerScore}`
   } else if(computerMove == 'scissors') {
    console.log(`draft`)
   }
})

















