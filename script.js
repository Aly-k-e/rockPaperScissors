
const choice = ["rock", "paper", "scissors"]

let userScore = 0;
let computerScore = 0;

function getRandomChoice() {
    const number = Math.floor(Math.random() * 3)
    return choice[number]
}

function getUserChoice() {
    const userChoice = prompt("rock, paper or scissors")
    return userChoice.toLowerCase()
}

function playRound(user, computer) {

    console.log(`you choose: ${user}`)
    setTimeout(() => console.log(`computer chose: ${computer}`), 1000)

    setTimeout(() => {
        if (user === computer) {
            console.log("its a draw")
            userScore += 1;
            computerScore += 1;

        }
        else if (user === "rock" && computer === "paper") {
            console.log("paper beats rock you lose")
            computerScore += 1;
        }
        else if (user === "rock" && computer === "scissors") {
            console.log("rock beats scissors you win")
            userScore += 1;
        }
        else if (user === "paper" && computer === "rock") {
            console.log("paper beats rock you win")
            userScore += 1;
        }
        else if (user === "paper" && computer === "scissors") {
            console.log("scissor beats paper you lose")
            computerScore += 1;
        }
        else if (user === "scissors" && computer === "rock") {
            console.log("rock beats scissors you lose")
            computerScore += 1;
        }
        else if (user === "scissors" && computer === "paper") {
            console.log("scissors beat paper you win")
            userScore += 1;
        }
        else {
            console.log("make sure you spell everything correctly")
            console.log("lets try again")
            setTimeout(() => {
                playRound(getUserChoice(), getRandomChoice())
            }, 2000);
        }
    }, 2000)
}

function playGame() {
    userScore = 0;
    computerScore = 0;

    for (let i = 0; i <= 5; i++) {

        setTimeout(() => playRound(getUserChoice()), getRandomChoice(), 3000)
    }
}

