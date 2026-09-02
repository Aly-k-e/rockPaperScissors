
const choice = ["rock", "paper", "scissors"]

function getRandomChoice() {
    const number = Math.floor(Math.random() * 3)
    console.log(choice[number])
}

function getUserChoice() {
    const userChoice = prompt("rock, paper or scissors")
    console.log(userChoice)
}
