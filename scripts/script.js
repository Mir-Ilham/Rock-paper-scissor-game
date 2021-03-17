const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const display = document.getElementById('display');
const yourScore = document.getElementById('your-score');
const compScore = document.getElementById('comp-score');
const yourMove = document.getElementById('your-move');
const compMove = document.getElementById('comp-move');
const compChoose = document.getElementById('comp-choose');
const playAgainBtn = document.createElement('a');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

rock.addEventListener('mouseenter', addShadow);
paper.addEventListener('mouseenter', addShadow);
scissors.addEventListener('mouseenter', addShadow);

rock.addEventListener('mouseleave', removeShadow);
paper.addEventListener('mouseleave', removeShadow);
scissors.addEventListener('mouseleave', removeShadow);

playAgainBtn.textContent = "Play Again";
playAgainBtn.classList.add('play-again');
playAgainBtn.href = "https://mir-ilham.github.io/Rock-paper-scissor-game/";

function addShadow() {
	event.target.classList.add('buttons-shadow');
}

function removeShadow() {
	event.target.classList.toggle('buttons-shadow');
}

function computerPlay() {
	let random = Math.random();
	if (random < 0.33) {
		return "Rock";
	} else if (random < 0.66) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

let youScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

	computerSelection = computerPlay();
	playerSelection = event;


	if (youScore == 5) {
		display.textContent = "game over!";
		display.appendChild(playAgainBtn);
	} else if (computerScore == 5) {
		display.textContent = "game over!";
		display.appendChild(playAgainBtn);
	} else {
		if (playerSelection.target.getAttribute('id') == "rock" && computerSelection == "Scissors") {
			youScore += 1;
			yourMove.style.backgroundImage = "url('images/rock.png')";
			compMove.style.backgroundImage = "url('images/scissors.png')";
			display.textContent = "You win! Rock beats Scissors";
			compChoose.textContent = `Chose ${computerSelection}`;
		} else if (playerSelection.target.getAttribute('id') == "scissors" && computerSelection == "Paper") {
			youScore += 1;
			yourMove.style.backgroundImage = "url('images/scissors.png')";
			compMove.style.backgroundImage = "url('images/paper.png')";
			display.textContent = "You win! Scissors beats Paper";
			compChoose.textContent = `Chose ${computerSelection}`;
		} else if (playerSelection.target.getAttribute('id') == "paper" && computerSelection == "Rock") {
			youScore += 1;
			yourMove.style.backgroundImage = "url('images/paper.png')";
			compMove.style.backgroundImage = "url('images/rock.png')";
			display.textContent = "You win! Paper beats Rock";
			compChoose.textContent = `Chose ${computerSelection}`;
		} else if (playerSelection.target.getAttribute('id') == "scissors" && computerSelection == "Rock") {
			computerScore += 1;
			yourMove.style.backgroundImage = "url('images/scissors.png')";
			compMove.style.backgroundImage = "url('images/rock.png')";
			display.textContent = "You lose! Rock beats Scissors";
			compChoose.textContent = `Chose ${computerSelection}`;
		} else if (playerSelection.target.getAttribute('id') == "paper" && computerSelection == "Scissors") {
			computerScore += 1;
			yourMove.style.backgroundImage = "url('images/paper.png')";
			compMove.style.backgroundImage = "url('images/scissors.png')";
			display.textContent = "You lose! Scissors beats Paper";
			compChoose.textContent = `Chose ${computerSelection}`;
		} else if (playerSelection.target.getAttribute('id') == "rock" && computerSelection == "Paper") {
			computerScore += 1;
			yourMove.style.backgroundImage = "url('images/rock.png')";
			compMove.style.backgroundImage = "url('images/paper.png')";
			display.textContent = "You lose! Paper beats Rock";
			compChoose.textContent = `Chose ${computerSelection}`;
		} else {
			display.textContent = "It\'s a tie";
			yourMove.style.backgroundImage = "url('images/tie.png')";
			compMove.style.backgroundImage = "url('images/tie.png')";
			compChoose.textContent = `Chose ${computerSelection}`;
		}

		yourScore.textContent = `Your Score: ${youScore}`;
		compScore.textContent = `Comp\'s Score: ${computerScore}`;
		winLoseCheck();
	}

}

function winLoseCheck() {
	if (youScore == 5) {
		display.textContent = "You WON the game!";
		display.appendChild(playAgainBtn);
	} else if (computerScore == 5) {
		display.textContent = "You LOSE the game!";
		display.appendChild(playAgainBtn);
	}
}
