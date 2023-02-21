function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "Rock"; 
        case 1: return "Paper"; 
        case 2: return "Scissors"; 
    }
}
function playRound(playerChoice,computerChoice) {
    if (playerChoice == computerChoice) {
        return `You draw!  You both chose "${playerChoice}"`;
    }
    if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") ||
        (playerChoice == "Scissors" && computerChoice == "Paper")) {
        score1++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    score2++;
    return `You lose!  ${computerChoice} beats ${playerChoice}`;
}
const buttons = document.querySelectorAll('#Rock,#Paper,#Scissors');
const result = document.querySelector("#Results");
const playerScore = document.querySelector("#PlayerScore");
const computerScore = document.querySelector("#ComputerScore");
let score1 = 0;
let score2 = 0;
let clearOnNextUpdate = true;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (clearOnNextUpdate) {
            const elements=document.querySelectorAll('#Results p');
            elements.forEach((element) => {
                result.removeChild(element);
            });
            clearOnNextUpdate = false;
        }
        const p = document.createElement('p');
        p.textContent = playRound(button.id,getComputerChoice());
        result.appendChild(p);
        playerScore.textContent = score1;
        computerScore.textContent = score2;
        if (score1 == 5 || score2 == 5) {
            const finalP = document.createElement('p');
            if (score1 == 5) {
                finalP.textContent = "You were first to five!  You win overall!";
            } else {
                finalP.textContent = "Computer was first to five!  You lose overall!"
            }
            score1 = 0;
            score2 = 0;
            result.appendChild(finalP);
            clearOnNextUpdate = true;
        }
    })
});

playerScore.textContent = "0";
computerScore.textContent = "0";
