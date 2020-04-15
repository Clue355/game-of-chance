//<img id="computer" src="" alt="rock-paper-scissors">

let PlayerChoice 
let computerChoice
let rock = document.getElementById('rock')
rock.onclick = function() {
   PlayerChoice = "rock"
}
let paper = document.getElementById('paper')
paper.onclick = function(){
  PlayerChoice = "paper"
}
let scissors = document.getElementById('scissors')
scissors.onclick = function(){
  PlayerChoice = "scissors"
}
let button = document.getElementsByTagName("button")
button.onclick = function(){
  let randomNum = Math.floor(Math.random() * Math.floor(3));
  switch(randomNum){
    case 0: computerChoice = "rock"
    break;
    case 1: computerChoice = "paper"
    break; 
    case 2: computerChoice = "scissors"
    break; 
    default: console.log('error')
    break;
  }
}
//Computer makes a random choice
// function computerChoice() {
//     let randomNum = Math.floor(Math.random() * Math.floor(3));
//     switch(randomNum){
//       case 0: console.log('0');
//       case 1: console.log('1'); 
//       case 2: console.log('2'); 
    
//     }
//   }
//Player makes a choice
//  function playerChoice(choice) {
//   switch(choice){
//     case rock: console.log('rock');
//     case paper: console.log('paper'); 
//     case scissors: console.log('scissors'); 
  
//   }

//Checks who won
// function matchWinner(playerChoice, computerChoice ) {
// switch(playerChoice,computerChoice){
//   case 
// }
// }

