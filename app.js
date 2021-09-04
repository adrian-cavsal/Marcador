const j1 = {
    score: 0,
    button: document.querySelector('#jugador1'),
    display: document.querySelector('#marcadorJ1')
}
const j2 = {
    score: 0,
    button: document.querySelector('#jugador2'),
    display: document.querySelector('#marcadorJ2')
}

let imagen = document.getElementById('imagen');
let imagenActual = document.getElementById('imagen').src;
let imagenFireworks = "https://www.themayor.eu/web/files/articles/6394/main_image/thumb_1024x663_new-years-eve-3882231_1920.jpg";

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#puntos');
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            imagen.src = imagenFireworks;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

j1.button.addEventListener('click', function () {
    updateScores(j1, j2)
})
j2.button.addEventListener('click', function () {
    updateScores(j2, j1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    imagen.src = imagenActual;
    for (let p of [j1, j2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}