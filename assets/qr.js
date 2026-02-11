var error = document.querySelector(".error");
var closeButton = document.querySelector(".close");

// Otwieranie modala QR (dla "Zeskanuj kod QR")
document.querySelectorAll(".action").forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Pierwszy action = "Zeskanuj kod QR" - otwiera modal
        // Drugi action = "Pokaż kod QR" - przechodzi do nowej strony
        if (index === 0) {
            error.classList.add("error_open");
        } else if (index === 1) {
            window.location.href = 'qr_show.html';
        }
    });
});

// Zamykanie - kliknięcie na overlay
closeButton.addEventListener('click', () => {
    error.classList.remove("error_open");
});

// Timer i progress dla modala
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
