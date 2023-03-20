function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3) + 1
    if (computerSelection == 1) {
        return "Rock"
    } else if (computerSelection == 2) {
        return "Paper"
    } else if (computerSelection == 3) {
        return "Scissor"
    }
}

function singleRound(playerSelection, computerSelection) {
    playerSelect = playerSelection.toLowerCase()

    if (playerSelect == "rock") {
        if (computerSelection == "Rock") {
            console.log("Rock vs Rock. DRAW!") 
            return ("=======================")
        } else if (computerSelection == "Paper") {
            console.log("Rock vs Paper. COMPUTER WINS!") 
            computerScore++
            return ("=======================")
        } else if (computerSelection == "Scissor") {
            console.log("Rock vs Scissor. PLAYER WINS!") 
            playerScore++
            return ("=======================")
        }
    } else if (playerSelect == "paper") {
        if (computerSelection == "Rock") {
            console.log("Paper vs Rock. PLAYER WINS!") 
            playerScore++
            return ("=======================")
        } else if (computerSelection == "Paper") {
            console.log("Paper vs Paper. DRAW!") 
            return ("=======================")
        } else if (computerSelection == "Scissor") {
            console.log("Paper vs Scissor. COMPUTER WINS!") 
            computerScore++
            return ("=======================")
        }
    } else if (playerSelect == "scissor") {
        if (computerSelection == "Rock") {
            console.log("Scissor vs Rock. COMPUTER WINS!")
            computerScore++
            return ("=======================")
        } else if (computerSelection == "Paper") {
            console.log("Scissor vs Paper. PLAYER WINS!") 
            playerScore++
            return ("=======================")
        } else if (computerSelection == "Scissor") {
            console.log("Scissor vs Scissor. DRAW!")
            return ("=======================") 
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissor?")
        computerSelection = getComputerChoice()
        console.log(singleRound(playerSelection, computerSelection))
    }

    if (playerScore == computerScore) {
        return "It's a draw!"
    } else if (playerScore > computerScore) {
        return "PLAYER WINS!!!"
    } else if (playerScore < computerScore) {
        return "COMPUTER WINS!!!"
    }
}

// const playerSelection = "ScIssOr";
// let computerSelection = getComputerChoice();
// console.log(playerSelection);
// console.log(computerSelection)
// console.log(singleRound(playerSelection, computerSelection));
let playerScore = 0 
let computerScore = 0
console.log(game())
