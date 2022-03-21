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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const results = document.querySelector('.results');
        results.textContent = playGame(e.target.classList.value, computerPlay());
    })
})