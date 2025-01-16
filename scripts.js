let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoices();
    if(computerChoice == userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == 'rock') {
            userWin = computerChoice == 'scissor' ? true : false;
        } else if(userChoice == 'paper') {
            userWin = computerChoice == 'rock' ? true : false;
        } else {
            userWin = computerChoice == 'paper' ? true : false;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

}

const generateComputerChoices = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randowIdx = Math.floor(Math.random()*3);
    return options[randowIdx];
}

const drawGame = () => {
    msg.innerText = 'Your game is draw, Play your move!';
    msg.style.backgroundColor = 'black';
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        msg.innerText = `You won this one, ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lose this one, ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
    
    if (userScore > computerScore) {
        userScorePara.style.fontSize = '6rem';
        computerScorePara.style.fontSize = '4rem';
    } else if (userScore < computerScore) {
        computerScorePara.style.fontSize = '6rem';
        userScorePara.style.fontSize = '4rem';
    } else {
        userScorePara.style.fontSize = '4rem';
        computerScorePara.style.fontSize = '4rem';
    }
}