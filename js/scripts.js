// Cargar sonidos
const sounds = {
  math: new Audio("sounds/magiaz.mp3"),
  science: new Audio("sounds/ascent.mp3"),
  history: new Audio("sounds/tonoradio.mp3"),
  language: new Audio("sounds/cartoon.mp3"),
  tec: new Audio("sounds/glitch.mp3"),
  music: new Audio("sounds/hitcharge.mp3"),
  sports: new Audio("sounds/explosion.mp3"),
  back: new Audio("sounds/sci-fi.mp3")
};

function playAndGo(event, sound, page) {
    event.preventDefault();
    sounds[sound].play();
    setTimeout(() => {
        window.location.href = page;
    }, 1100); // espera 1.1 segundos
}