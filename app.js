const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1Button.addEventListener('click', () => updateScores(p1, p2))

p2Button.addEventListener('click', () => updateScores(p2, p1))

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-danger', 'has-text-success');
    p2.display.classList.remove('has-text-danger', 'has-text-success');
    p1.button.disabled = false;
    p2.button.disabled = false;

}