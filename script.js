
const choice = ["rock", "paper", "scissors"]

let userScore = 0;
let computerScore = 0;


const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const resultsDiv = document.querySelector(".results")
const playerScoreResult = document.querySelector(".ps")
const computerScoreResult = document.querySelector(".cs")
const result = document.querySelector(".result")


function playRound(user, computer) {

    console.log(`you choose: ${user}`)
    result.textContent = `you choose: ${user}`
    setTimeout(() => {
        console.log(`computer chose: ${computer}`)
        result.textContent = `computer chose: ${computer}`
    }, 1000)

    setTimeout(() => {
        if (user === computer) {
            console.log("its a draw")
            result.textContent = "its a draw"
            userScore += 1;
            computerScore += 1;

        }
        else if (user === "rock" && computer === "paper") {
            console.log("paper beats rock you lose")
            result.textContent = "paper beats rock you lose"
            computerScore += 1;
            playerScoreResult.textContent = userScore
            computerScoreResult.textContent = computerScore
        }
        else if (user === "rock" && computer === "scissors") {
            console.log("rock beats scissors you win")
            result.textContent = "rock beats scissors you win"
            userScore += 1;
            playerScoreResult.textContent = userScore
            computerScoreResult.textContent = computerScore
        }
        else if (user === "paper" && computer === "rock") {
            console.log("paper beats rock you win")
            result.textContent = "paper beats rock you win"
            userScore += 1;
            playerScoreResult.textContent = userScore
            computerScoreResult.textContent = computerScore
        }
        else if (user === "paper" && computer === "scissors") {
            console.log("scissor beats paper you lose")
            result.textContent = "scissor beats paper you lose"
            computerScore += 1;
            playerScoreResult.textContent = userScore
            computerScoreResult.textContent = computerScore
        }
        else if (user === "scissors" && computer === "rock") {
            console.log("rock beats scissors you lose")
            result.textContent = "rock beats scissors you lose"
            computerScore += 1;
            playerScoreResult.textContent = userScore
            computerScoreResult.textContent = computerScore
        }
        else if (user === "scissors" && computer === "paper") {
            console.log("scissors beat paper you win")
            result.textContent = "scissors beats paper you win"
            userScore += 1;
            playerScoreResult.textContent = userScore
            computerScoreResult.textContent = computerScore
        }
    }, 2000)
}

function getRandomChoice(user) {
    const number = Math.floor(Math.random() * 3)
    playRound(user, choice[number])
}

function playGame() {
    userScore = 0;
    computerScore = 0;

    setTimeout(() => {
        console.log("round 1")
        playRound(getUserChoice, getRandomChoice)
    }, 2000)

    setTimeout(() => {
        console.log("round 2")
        playRound(getUserChoice, getRandomChoice)
    }, 2000)

    setTimeout(() => {
        console.log("round 3")
        playRound(getUserChoice, getRandomChoice)
    }, 2000)

    setTimeout(() => {
        console.log("round 4")
        playRound(getUserChoice, getRandomChoice)
    }, 2000)

    setTimeout(() => {
        console.log("round 5")
        playRound(getUserChoice, getRandomChoice)
    }, 2000)

    if (computerScore > userScore) {
        console.log(`computer scored ${computerScore} you scored ${userScore} you lose!`)
    }
    else {
        console.log(`computer scored ${computerScore} you scored ${userScore} you win!`)
    }

}



rockBtn.addEventListener("click", () => {
    getRandomChoice("rock")
})
paperBtn.addEventListener("click", () => {
    getRandomChoice("paper")
})
scissorsBtn.addEventListener("click", () => {
    getRandomChoice("scissors")
})
