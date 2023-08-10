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
const results = document.querySelector(".results")
const win = document.createElement("div")
win.textContent = "You win!"
const tie = document.createElement("div")
tie.textContent = "Ahh!! Seems like a tie. Try again."
const lose = document.createElement("div")
lose.textContent = "You lose!"


// Play a round of R,P,S. between the user and the machine

function playRps(userChoice, computerChoice = "rock"){
    if (userChoice === "rock" && computerChoice === "rock"){
        results.appendChild(tie)
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "rock" && computerChoice === "scissors"){
        computerScore = computerScore+1
        results.appendChild(lose)
        return("You lose! Scissors beat Rocks.")
    } else if (userChoice === "rock" && computerChoice === "paper"){
        results.appendChild(win)
        playerScore = playerScore + 1
        return("You win! Rocks beat Paper.")
    } else if (userChoice === "paper" && computerChoice === "paper"){
        results.appendChild(tie)
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "paper" && computerChoice === "scissors"){
        results.appendChild(lose)
        computerScore = computerScore+1
        return("You lose! scissors beat paper.")
    } else if (userChoice === "paper" && computerChoice === "rock"){
        results.appendChild(win)
        playerScore = playerScore+1
        return("You win! Paper beats Rocks.")
    } else if (userChoice === "scissors" && computerChoice === "scissors"){
        results.appendChild(tie)
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "scissors" && computerChoice === "rock"){
        results.appendChild(lose)
        computerScore = computerScore+1
        return("You lose! Rocks beat Scissors.")
    } else if (userChoice === "scissors" && computerChoice === "paper"){
        results.appendChild(win)
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
        game(button.id)
    })
})


function game(playerSelection){
    pScore.textContent = "0"
    cScore.textContent = "0"
    let gameOver = false
    if (gameOver){
        pScore.textContent = "0"
        cScore.textContent = "0"
    }
        const computerSelection = getComputerChoice(random());
        playRps(playerSelection, computerSelection);
        
    if (playerScore > computerScore){
            pScore.textContent = playerScore
            cScore.textContent = computerScore
    } else {
    pScore.textContent = playerScore
    cScore.textContent = computerScore
    }
    if (playerScore === 5){
    console.log("YOU WONNNNNNNNN")
    pScore.textContent = "0"
    cScore.textContent = "0"
    gameOver = true
    }
    if (computerScore === 5){
    console.log("YOU LOSTTTTTTTTTTTN")
    pScore.textContent = "0"
    cScore.textContent = "0"
    gameOver = true
    }
}


const pScore = document.querySelector(".playerScore")
const cScore = document.querySelector(".computerScore")
