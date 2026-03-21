const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("radio");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "Pause";
    } else {
        audio.pause();
        playBtn.textContent = "Listen Now";
    }
});