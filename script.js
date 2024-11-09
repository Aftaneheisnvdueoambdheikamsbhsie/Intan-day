let currentPage = 1;
const audio = document.getElementById('backsound');
const video = document.getElementById('surpriseVideo');

document.addEventListener("DOMContentLoaded", function() {
    showPage(1);
    playMusic();
});

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById(`page${pageNumber}`).style.display = "block";

    // Memutar/menghentikan audio dan video sesuai halaman
    if (pageNumber === 3) {
        video.play().catch(error => {
            console.error("Video tidak bisa diputar otomatis. Silakan izinkan video di browser Anda.", error);
        });
    } else {
        video.pause();
        video.currentTime = 0;
    }
}

function nextPage(pageNumber) {
    currentPage = pageNumber;
    showPage(currentPage);
}

// Fungsi untuk memutar musik
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

// Event listener untuk menghentikan musik ketika pengguna keluar dari semua halaman
window.addEventListener('beforeunload', () => {
    stopMusic();
});

// Menjeda audio jika pengguna beralih ke tab lain
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        audio.pause(); // Menjeda musik saat pengguna beralih tab
        video.pause(); // Menjeda video
    } else {
        audio.play(); // Melanjutkan musik saat pengguna kembali
        if (currentPage === 3) {
            video.play(); // Melanjutkan video jika pada halaman 3
        }
    }
});
