const buttons = document.querySelector(".btns");
const restart = document.querySelector(".restart");

let humanChoiceDisplay = document.querySelector(".choices .human");
let computerChoiceDisplay = document.querySelector(".choices .computer");
let humanScoreDisplay = document.querySelector(".scores .human");
let computerScoreDisplay = document.querySelector(".scores .computer");
let humanScore = 0;
let computerScore = 0;

let roundWinnerDisplay = document.querySelector(".winner-round");
let roundDisplay = document.querySelector(".round");
let round = 1;

function getComputerChoice() {
    // To pick random int from min(inclusive)-max(inclusive) use:
    // Math.floor(Math.random() * (max - min + 1)) + min;
    let num = Math.floor(Math.random() * (2 + 1)) + 1;

    switch (num) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;

    let outcome;

    switch (humanChoice) {
        case "Rock":
            if (computerChoice === "Rock") {
                outcome = 0;
            } else if (computerChoice === "Paper") {
                outcome = -1;
            } else {
                outcome = 1;
            }
            break;
        case "Paper":
            if (computerChoice === "Rock") {
                outcome = 1;
            } else if (computerChoice === "Paper") {
                outcome = 0;
            } else {
                outcome = -1;
            }
            break;
        case "Scissors":
            if (computerChoice === "Rock") {
                outcome = -1;
            } else if (computerChoice === "Paper") {
                outcome = 1;
            } else {
                outcome = 0;
            }
    }

    console.log("outcome: " + outcome + " | human choice: " 
                        + humanChoice + " | computer choice: " 
                        + computerChoice);
    return outcome;

}

buttons.addEventListener("click", (e) => {
    let humanChoice = e.target.className;
    if (humanChoice !== "btns" && round <= 5) {
        humanChoiceDisplay.textContent = humanChoice;
        let outcome = playRound(humanChoice);

        if (outcome === 1) {
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            roundWinnerDisplay.textContent = "You";
        } else if (outcome === -1) {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            roundWinnerDisplay.textContent = "Computer";
        } else {
            roundWinnerDisplay.textContent = "Tie";
        }

        round++;
        if (round !== 6) {
            roundDisplay.textContent = round;
        }

    }
    if (round === 6) {
        const body = document.querySelector("body");
        let gameText = document.createElement("p");
        gameText.classList.add("game-end-text");
        let text = "";

        if (humanScore>computerScore) {
            text += "Congrats you win the game!"
        } else if (humanScore<computerScore) {
            text += "You lost the game."
        } else {
            text += "The game was a tie."
        }
        text += " Please press restart to play another game."

        gameText.textContent = text;
        body.insertBefore(gameText, restart);
        round++;
    }
});

restart.addEventListener("click", ()=>{
    round = 1;
    roundDisplay.textContent = 1;

    humanChoiceDisplay.textContent = 0;
    computerChoiceDisplay.textContent = 0;

    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    roundWinnerDisplay.textContent = "";

    let endGameText = document.querySelector(".game-end-text");
    if (endGameText !== null) {
        endGameText.remove();
    }
});