let currentPage = 1;

document.addEventListener("DOMContentLoaded", function() {
    showPage(1);
});

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById(`page${pageNumber}`).style.display = "block";
}

function nextPage(pageNumber) {
    currentPage = pageNumber;
    showPage(currentPage);
}

function startSurprise() {
    showConfetti();
    nextPage(2);
}

function showConfetti() {
    const confettiContainer = document.getElementById("confettiContainer");
    confettiContainer.style.display = "block";
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => confettiContainer.style.display = "none", 3000);
}

function showSurprise() {
    document.querySelector(".gift").classList.add("explode");
    document.getElementById("continueButton").style.display = "inline";
}

function submitAnswer() {
    let answer = document.getElementById("answer").value;
    if (answer) {
        alert(`Terima kasih atas jawabanmu, Intan!`);
        nextPage(5);
    } else {
        alert("Jangan lupa isi jawaban dulu!");
    }
}

function openGift() {
    document.querySelector(".envelope").classList.add("open");
    document.getElementById("finalButton").style.display = "inline";
}
// Seleksi elemen audio di halaman (gantilah 'backsound.mp3' dengan URL lagu yang Anda gunakan)
const audio = new Audio('backsound.mp3');
audio.loop = true; // Memutar musik terus menerus

// Fungsi untuk memulai pemutaran musik
function playMusic() {
    audio.play().catch(error => {
        console.error("Musik tidak bisa diputar otomatis. Silakan izinkan audio di browser Anda.", error);
    });
}

// Fungsi untuk menghentikan musik
function stopMusic() {
    audio.pause();
    audio.currentTime = 0; // Mengatur kembali ke awal
}

// Event listener untuk memulai musik ketika halaman pertama dibuka
window.addEventListener('load', () => {
    playMusic();
});

// Event listener untuk menghentikan musik ketika pengguna keluar dari semua halaman
window.addEventListener('beforeunload', () => {
    stopMusic();
});

// Optional: Menjeda musik jika pengguna beralih ke tab lain dan melanjutkan saat kembali
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        audio.pause(); // Menjeda musik saat pengguna beralih tab
    } else {
        audio.play(); // Melanjutkan musik saat pengguna kembali
    }
});

