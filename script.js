//global
let playerScore = 0;
let computerScore = 0;
const maxRonuds = 3;
const choices = ['rock', 'paper', 'scissors']
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
let computerMove = null;
let playerMove = null;

function generateRandomNumber() {
  return Math.floor(Math.random() * 3)
}

function resetedVariables() {
  playerScore = 0;
  computerScore = 0;
}

function reset() {
  mainSection.style.display = "flex";
  finishSection.style.display = "none";
  resetedVariables()
  playerScoreStatus.innerHTML = 0;
  computerScoreStatus.innerHTML = 0;
}

//dom
const startSection = document.querySelector('.start');
const mainSection = document.querySelector('.playingScreen');
const buttonPlay = document.querySelector('.play');
const playerScoreStatus = document.querySelector('.playerScore')
const computerScoreStatus = document.querySelector('.computerScore');
const playerMove1 = document.querySelector('.actionRock');
const playerMove2 = document.querySelector('.actionPaper');
const playerMove3 = document.querySelector('.actionScissors');
const actionButtons = document.querySelectorAll('.action')
const someoneWinner = document.querySelector('.winner');
const playerChoices = document.querySelector('.choices');
const finishSection = document.querySelector('.finish');
const playAgain = document.querySelector('.playAgain');


//displayScreen
function changeToMainScreen() {
  startSection.classList.add('display-none');
  mainSection.classList.add('playingScreenActive');  
}
buttonPlay.addEventListener('click', changeToMainScreen);

//forEach on action buttons
actionButtons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    playerMove = e.target.id;
    computerMove = choices[generateRandomNumber()];
    console.log(playerMove);
    console.log((computerMove));
    if(computerMove == 'rock' && playerMove == 'rock' ) {
      console.log('draft')
     } else if(computerMove == 'paper' && playerMove == 'rock') {
      computerScoreStatus.innerHTML = `${++computerScore}`
     } else if(computerMove == 'scissors' && playerMove == 'rock') {
      playerScoreStatus.innerHTML = `${++playerScore}`
     } else if(computerMove == 'rock' && playerMove == 'paper') {
      playerScoreStatus.innerHTML = `${++playerScore}`
     } else if(computerMove == 'paper' && playerMove == 'paper' ) {
      console.log(`draft`)
     } else if(computerMove == 'scissors' && playerMove == 'paper') {
      computerScoreStatus.innerHTML = `${++computerScore}`
     } else if(computerMove == 'rock' && playerMove == 'scissors') {
      computerScoreStatus.innerHTML = `${++computerScore}`
     } else if(computerMove == 'paper' && playerMove == 'scissors') {
      playerScoreStatus.innerHTML = `${++playerScore}`
     } else if(computerMove == 'scissors') {
      console.log(`draft`)
     }
     checkWinner()
    
  })
});



function checkWinner() {
  if(playerScore == 3) {
    finishSection.style.display = "block"
    mainSection.style.display = "none";
    someoneWinner.innerHTML = `<h1>Winners is human, with score: ${playerScore}</h1>`
    resetedVariables();
    playAgain.addEventListener('click', reset)
  } else if(computerScore == 3) {
    finishSection.style.display = "block"    
    mainSection.style.display = "none";
    someoneWinner.innerHTML = `<h1>Winner is computer, with score: ${computerScore}`;
    playAgain.innerHTML = `Play again`
    resetedVariables();
    playAgain.addEventListener('click', reset)
}
}






















