// Check input for Rock Paper or Scissors
function checkInput(input1) {
  if (input1 === "rock" || input1 === "paper" || input1 === "scissors") {
    return input1;  // Accept input if its a match
  } else {
    return rePrompt(input1);  //Transfer to reprompting function
  }
}

// rePrompt in case of invalid input
function rePrompt(input2) {
  input2 = prompt("Incorrect input. Choose among Rock, Paper and Scissors only:").toLowerCase();
  return checkInput(input2);  //Transfer to checking function
}

// Take user input
// function getPlayerChoice(params) {
//   let input = prompt("Choose among Rock, Paper and Scissors:").toLowerCase();
//   return checkInput(input);  //Transfer to checking function
// }



// Create logic for computer choice
function getComputerChoice(params) {
  let num = Math.floor(Math.random() * (90 - 1) + 1);  // Random selection from (Rock, Paper, Scissors)
  // How to do random selection from 3 strings?
  // generate a random number between 1 and 90.
  // 1-30: R ... 31-60: P ... 61-90: S
  if (num < 31) {
    return "rock";
  } else if (num < 61) {
    return "paper";
  } else {
    return "scissors";
  }
}


// Score for user or computer: start a variable from 0 and increment by 1 for every win.
let computerScore = 0;
let playerScore = 0;

// Compare user input with computer choice
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("Draw");
    } else if (computerSelection === "paper") {
      computerScore += 1;
      console.log("You lose! Paper beats Rock");
    } else {
      playerScore += 1;
      console.log("You win!! Rock smashes Scissors");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore += 1;
      console.log("You win!! Paper beats Rock. Dont ask how.");
    } else if (computerSelection === "paper") {
      console.log("Draw");
    } else {
      computerScore += 1;
      console.log("You lose! Scissors rips through Paper");
    }
  } else {
    if (computerSelection === "rock") {
      computerScore += 1;
      console.log("You lost! Rock smashes scissors")
    } else if (computerSelection === "paper") {
      playerScore += 1;
      console.log("You won!! Scissors rips through paper")
    } else {
      console.log("Draw");
    }
  }
}

// Repeat game 5 times
for (let i = 0; i < 500; i++) {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();
  playRound(playerSelection, computerSelection);
  // Tally scores and declare winner
  if (i === 4) {
    if (computerScore > playerScore) {
      console.log(`You lose ${playerScore} : ${computerScore}`);
    } else {
      console.log(`You win ${playerScore} : ${computerScore}`);
    }
  }
}