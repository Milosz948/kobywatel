var error = document.querySelector(".error");
var closeButton = document.querySelector(".close");

// Otwieranie modala
document.querySelectorAll(".action").forEach((element) => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        error.classList.add("error_open");
    });
});

// Zamykanie - kliknięcie na overlay
closeButton.addEventListener('click', () => {
    error.classList.remove("error_open");
});

// Timer i progress
let seconds = 150;
const timer = document.getElementById("qrTimer");
const progress = document.getElementById("qrProgress");

const interval = setInterval(() => {
    if (seconds <= 0) {
        clearInterval(interval);
        return;
    }

    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    timer.textContent = `Kod wygaśnie za: ${min}:${sec.toString().padStart(2,"0")}`;
    progress.value = (seconds / 150) * 100;

    seconds--;
}, 1000);
