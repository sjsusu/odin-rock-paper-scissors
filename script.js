function getComputerChoice() {
    // To pick random int from min(inclusive)-max(inclusive) use:
    // Math.floor(Math.random() * (max - min + 1)) + min;
    let num = Math.floor(Math.random() * (2 + 1)) + 1;

    switch (num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let text = `Pick one of the following:
    1. Rock 
    2. Paper
    3. Scissors`

    let answer = prompt(text).toLowerCase();

    while (answer !== "rock" && answer !== "paper" && answer !== "scissors") {
        alert("Invalid choice. Try again.");
        answer = prompt(text).toLowerCase();
    }

    return answer;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return generateOutcomeText("tie", humanChoice, computerChoice);
            } else if (computerChoice === "paper") {
                return generateOutcomeText("lose", humanChoice, computerChoice);
            } else {
                return generateOutcomeText("win", humanChoice, computerChoice);
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                return generateOutcomeText("win", humanChoice, computerChoice);
            } else if (computerChoice === "paper") {
                return generateOutcomeText("tie", humanChoice, computerChoice);
            } else {
                return generateOutcomeText("lose", humanChoice, computerChoice);
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                return generateOutcomeText("lose", humanChoice, computerChoice);
            } else if (computerChoice === "paper") {
                return generateOutcomeText("win", humanChoice, computerChoice);
            } else {
                return generateOutcomeText("tie", humanChoice, computerChoice);
            }
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + " of 5.");

        outcome = playRound();

        if (outcome === 1) {
            humanScore++;
        } else if (outcome === -1) {
            computerScore++;
        }

        console.log("Score: You: " + humanScore + " | Computer: " + computerScore);
        console.log("---------------------------------------------------------");
    }

    if (humanScore > computerScore) {
        console.log("Game Over! You Win.");
    } else if (humanScore < computerScore) {
        console.log("Game Over! You Lose.");
    } else {
        console.log("Game Over! You Tie.");
    }

    console.log("Final Score: You: " + humanScore + " | Computer: " + computerScore);
}

function generateOutcomeText(outcome, ans1, ans2) {
    if (outcome === "win") {
        console.log("You Win! " + capitalize(ans1) + " beats " + capitalize(ans2) + ".");
        return 1;

    } else if (outcome === "lose") {
        console.log("You lose. " + capitalize(ans2) + " beats " + capitalize(ans1) + ".");
        return -1;

    } else {
        console.log("You tie. Both you and the computer chose " + capitalize(ans1) + ".");
        return 0;

    }
}

function capitalize(string) {
    if (string.length === 0) return string;
    else {
        firstChar = string.at(0).toUpperCase();
        return firstChar + string.slice(1);
    }
}