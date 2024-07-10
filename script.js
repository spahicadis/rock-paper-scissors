//kako radi forEach metoda u javascriptu
//kako uz pomoc forEach petlje dodati eventlistener za svaki elemnat(querySelectorAll)
//razlika izmedju forEach i map

//global
let playerScore = 0;
let computerScore = 0;
const maxRonuds = 3;
const choices = ['rock', 'paper', 'scissors']
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
let computerMove = null;
let playerMove = null;

function generateRandomNumber() {
  return Math.floor(Math.random() * 2)
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
const finishSection = document.querySelector('.finish')
const playAgain = document.querySelector('.playAgain')
//console.log(actionButtons)

//displayScreen
function changeToMainScreen() {
  startSection.classList.add('display-none');
  mainSection.classList.add('playingScreenActive');  
}
buttonPlay.addEventListener('click', changeToMainScreen);


//biding
playerMove1.addEventListener('click', function(e) {
 playerMove = e.target.id;
 computerMove = choices[generateRandomNumber()];
 console.log('player move:', playerMove );
 console.log('computer move:', computerMove);
 if(computerMove == 'rock') {
  console.log('draft')
 } else if(computerMove == 'paper') {
  computerScoreStatus.innerHTML = `${++computerScore}`
 } else if(computerMove == 'scissors') {
  playerScoreStatus.innerHTML = `${++playerScore}`
 }
checkWinner();
})

playerMove2.addEventListener('click', function(e) {
  playerMove = (e.target.id);
  computerMove = choices[generateRandomNumber()];
  console.log('player move:', playerMove );
  console.log('computer move:', computerMove);
  if(computerMove == 'rock') {
    playerScoreStatus.innerHTML = `${++playerScore}`
   } else if(computerMove == 'paper') {
    console.log(`draft`)
   } else if(computerMove == 'scissors') {
    computerScoreStatus.innerHTML = `${++computerScore}`
   }
   checkWinner();
})

playerMove3.addEventListener('click', function(e) {
  playerMove = (e.target.id);
  computerMove = choices[generateRandomNumber()];
  console.log('player move:', playerMove );
  console.log('computer move:', computerMove);
  if(computerMove == 'rock') {
    computerScoreStatus.innerHTML = `${++computerScore}`
   } else if(computerMove == 'paper') {
    playerScoreStatus.innerHTML = `${++playerScore}`
   } else if(computerMove == 'scissors') {
    console.log(`draft`)
   }
   checkWinner();
})

function checkWinner() {
  if(playerScore == 3) {
    mainSection.style.display = "none";
    someoneWinner.innerHTML = `<h1>Winners is human, with score: ${playerScore}</h1>`
    playAgain.innerHTML = `Play again`;
    playAgain.addEventListener('click', function() {window.location.reload()})
  } else if(computerScore == 3) {
    mainSection.style.display = "none";
    someoneWinner.innerHTML = `<h1>Winner is computer, with score: ${computerScore}`;
    playAgain.innerHTML = `Play again`
    playAgain.addEventListener('click', function() {window.location.reload()})
  }
}






















