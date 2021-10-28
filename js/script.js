console.log("script.js loaded successfully");

const audio = new Audio("./audio/onuncu_yıl_nutku.mp3");

document.addEventListener("click", () => {
    audio.play();
});