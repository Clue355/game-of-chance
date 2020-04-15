//<img id="computer" src="" alt="rock-paper-scissors">

let PlayerChoice
let computerChoice
let randomNum
rock.onclick = function () {
  PlayerChoice = "rock"
  randomNumber()
  computer()
  return
}
let paper = document.getElementById('paper')
paper.onclick = function () {
  PlayerChoice = "paper"
  randomNumber()
  computer()
  return
}
let scissors = document.getElementById('scissors')
scissors.onclick = function () {
  PlayerChoice = "scissors"
  randomNumber()
  computer()
  return;
}

function randomNumber() {
    min = Math.ceil(0);
    max = Math.floor(3);
    randomNum = Math.floor(Math.random() * (max - min)) + min;
  return
}

function computer() {
  switch (randomNum) {
    case 0:
      computerChoice = "rock"
      winner()
      return;
    case 1:
      computerChoice = "paper"
      winner
      return;
    case 2:
      computerChoice = "scissors"
      winner()
      return;
    default:
      console.log('error')
      break;
  }
}



function winner() {
  let image = document.getElementById('computer')
  let board = document.getElementById('winnerBoard')
  //rock & scissors
  if (PlayerChoice === "rock" && computerChoice === "scissors") {
    board.textContent = "Player Wins!!"
    image.src = "images/RobotDefeated_RPS.png"
    return
  } else if (PlayerChoice === "scissors" && computerChoice === "rock") {
    console.log("computer wins!!!")
    image.src = "images/RobotAlive_RPS.png"
    return
  }
  //paper & scissors
  if (PlayerChoice === "paper" && computerChoice === "scissors") {
    board.textContent = "Computer Wins!!"
    image.src = "images/RobotAlive_RPS.png"
    return
  } else if (PlayerChoice === "scissors" && computerChoice === "paper") {
    board.textContent = "Player Wins!!"
    image.src = "images/RobotDefeated_RPS.png"
    return
  }
  // rock & paper
  if (PlayerChoice === "rock" && computerChoice === "paper") {
    board.textContent = "Computer Wins!!"
    image.src = "images/RobotAlive_RPS.png"
    return
  } else if (PlayerChoice === "paper" && computerChoice === "rock") {
    board.textContent = "Player Wins!!"
    image.src = "images/RobotDefeated_RPS.png"
    return
  }
  //tie game
  if (PlayerChoice === computerChoice) {
    board.textContent = "It's A Tie!!!"
    image.src = "images/RobotAlive_RPS.png"
    return
  }
}
