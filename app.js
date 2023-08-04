// Get a random choice to act as the computer play. => Make a function that returns a random selection between Rock, Paper or Scissors.

let choice = "";

function random(){
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice (num){
    if (num === 1){
        choice = "Rocks"
    } else if (num === 2){
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    return choice
}



// Play a round of R,P,S. between the user and the machine

function playRps(userChoice, computerChoice = "Rocks"){
    if (userChoice === "Rocks" && computerChoice === "Rocks"){
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "Rocks" && computerChoice === "Scissors"){
        return("You lose! Scissors beat Rocks.")
    } else if (userChoice === "Rocks" && computerChoice === "Paper"){
        return("You win! Rocks beat Paper.")
    } else if (userChoice === "Paper" && computerChoice === "Paper"){
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "Paper" && computerChoice === "Scissors"){
        return("You lose! Scissors beat Paper.")
    } else if (userChoice === "Paper" && computerChoice === "Rocks"){
        return("You win! Paper beats Rocks.")
    } else if (userChoice === "Scissors" && computerChoice === "Scissors"){
        return("Ahh!! Seems like a tie. Try again.")
    } else if (userChoice === "Scissors" && computerChoice === "Rocks"){
        return("You lose! Rocks beat Scissors.")
    } else if (userChoice === "Scissors" && computerChoice === "Paper"){
        return("You win! Scissors beat Paper.")
    }
}



//

//Play five rounds and for each round keep the score.

function game(){
    for(let i = 0; i < 5; i++){

        const playerSelection = "Scissors"
        const computerSelection = getComputerChoice(random());
        console.log(playRps(playerSelection, computerSelection))

    }
}

game()
