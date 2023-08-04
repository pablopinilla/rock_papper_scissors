console.log("Supp!")
// Get a random choice to act as the computer play. => Make a function that returns a random selection between Rock, Paper or Scissors.

let choice = "";
let rand = 0

function random(){
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice (num){
    if (num === 1){
        choice = "Rock"
    } else if (num === 2){
        choice = "Papper"
    } else {
        choice = "Scissors"
    }
    console.log(choice)
}

getComputerChoice(random())