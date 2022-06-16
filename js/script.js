const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
// const shell = document.querySelector(".shell");
// const bowser = document.querySelector(".bowser");
const startPage = document.getElementById("start");
const gameOverPage = document.getElementById("game-over");

// GAME SOUNDS //

const gameSound = new Audio();
gameSound.src = "./sounds/background-sound.mp4";
gameSound.volume = 0.3;
gameSound.loop = true;

const gameStart = new Audio();
gameStart.src = "./sounds/mario-start.mp4";
gameStart.volume = 0.6;

const jumpSound = new Audio();
jumpSound.src = "./sounds/mario-jump.mp4";
jumpSound.volume = 0.6;

const lostSound = new Audio();
lostSound.src = "./sounds/mario-death.mp4";
lostSound.volume = 0.3;

const jump = () => {
  mario.classList.add("jump");

  jumpSound.play();

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

window.onload = () => {
  startPage.classList.remove("hidden");
  gameOverPage.classList.add("hidden");
  document.querySelector(".start-btn").onclick = () => {
    start();
  };
};

function start() {
  startPage.classList.add("hidden");
  gameOverPage.classList.add("hidden");

  gameStart.play();

  setTimeout(() => {
    gameSound.play();
  }, 1000);

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    // const shellPosition = shell.offsetLeft;
    // const bowserPosition = bowser.offsetLeft;

    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      // shell.style.animation = "none";
      // shell.style.left = `${shellPosition}px`;

      // bowser.style.animation = "none";
      // bowser.style.left = `${bowserPosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./img/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

      setTimeout(() => {
        gameOverPage.classList.remove("hidden");
      }, 1000);

      gameSound.pause();
      lostSound.play();

      clearInterval(loop);
    }
  }, 10);
}

document.addEventListener("keydown", jump);
