// Get a random choice to act as the computer play. => Make a function that returns a random selection between Rock, Paper or Scissors.

let choice = "";

function random(){
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice (num){
    if (num === 1){
        choice = "rock"
    } else if (num === 2){
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}



// Play a round of R,P,S. between the user and the machine

function playRps(userChoice, computerChoice = "rock"){
    if (userChoice === "rock" && computerChoice === "rock"){
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "rock" && computerChoice === "scissors"){
        computerScore = computerScore+1
        return("You lose! Scissors beat Rocks.")
    } else if (userChoice === "rock" && computerChoice === "paper"){
        playerScore = playerScore + 1
        return("You win! Rocks beat Paper.")
    } else if (userChoice === "paper" && computerChoice === "paper"){
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore+1
        return("You lose! scissors beat paper.")
    } else if (userChoice === "paper" && computerChoice === "rock"){
        playerScore = playerScore+1
        return("You win! Paper beats Rocks.")
    } else if (userChoice === "scissors" && computerChoice === "scissors"){
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore+1
        return("You lose! Rocks beat Scissors.")
    } else if (userChoice === "scissors" && computerChoice === "paper"){
        playerScore = playerScore+1
        return("You win! Scissors beat Paper.")
    }
}



//

//Play five rounds and for each round keep the score.

let playerScore = 0;
let computerScore = 0;
let result = "lost! :("
const rock = document.querySelector("#rockBtn")
const paper = document.querySelector("#paperBtn")
const scissors = document.querySelector("#scissorsBtn")
const buttons = document.querySelectorAll("button")


buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        console.log(button.id)
        game(button.id)
    })
})





function game(playerSelection){
        const computerSelection = getComputerChoice(random());
        console.log(playRps(playerSelection, computerSelection))
        console.log(playerSelection)
    if (playerScore > computerScore){
        result = "won! :D"
    } else {
        result;
    }
    console.log(`Your score is ${playerScore}, your opponent's score is ${computerScore}. You ${result}`)
}


