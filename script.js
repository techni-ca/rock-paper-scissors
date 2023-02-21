function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "Rock"; 
        case 1: return "Paper"; 
        case 2: return "Scissors"; 
    }
}
function capitalise(inString) {
    return inString.slice(0,1).toUpperCase() + inString.slice(1).toLowerCase();
}
function playRound(playerChoice,computerChoice) {
    if (playerChoice == computerChoice) {
        return `You draw!  You both chose "${playerChoice}"`;
    }
    if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") ||
        (playerChoice == "Scissors" && computerChoice == "Paper")) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    return `You lose!  ${computerChoice} beats ${playerChoice}`;
}
function playFunction(choice) {
    choice = capitalise(choice);
    switch (choice) {
        case "Rock":
        case "Paper":
        case "Scissors":
            return playRound(choice,getComputerChoice());
            break;
        default:
            return `${choice} is not a valid move to play!`;
    }
}
const buttons = document.querySelectorAll('#rock,#paper,#scissors');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playFunction(button.id));
    })
});
