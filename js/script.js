const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

// GAME SOUNDS //

const gameSound = new Audio();
gameSound.src = "./sounds/background-sound.mp4";
gameSound.volume = 0.3;
gameSound.loop = true;

const gameStart = new Audio();
jumpSound.src = "./sounds/mario-start.mp4";
jumpSound.volume = 0.6;

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

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameSound.pause();
    lostSound.play();

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
