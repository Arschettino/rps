function computerPlay() {
    let selection = Math.floor(Math.random()*3);
    return ['rock','paper','scissors'][selection];
}

function playGame(playerSelection, computerSelection) {
    let result;
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection === 'rock') result = 0;
            else if(computerSelection === 'paper') result = -1;
            else result = 1;
            break;
        case 'paper':
            if (computerSelection === 'rock') result = 1;
            else if (computerSelection === 'paper') result = 0;
            else result = -1;
            break;
        case 'scissors':
            if (computerSelection === 'rock') result = -1;
            else if (computerSelection === 'paper') result = 1;
            else result = 0;
            break;
        default:
            result = 0;
    }
    switch(result) {
        case -1:
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case 0:
            return "It's a tie!"
            break;
        case 1:
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    let score = [0,0];
    for (i=1; i<=5; i++) {
        let outcome = playGame(window.prompt('Make your selection:'),computerPlay());
        console.log(outcome);
        if(outcome.includes("Win")) score[0]++;
        else if(outcome.includes("Lose")) score[1]++;
    }
    if(score[0]>score[1]) return 'Player Wins';
    else if(score[1]>score[0]) return 'Computer Wins';
    else return "It's a Tie!";
}


console.log(game());