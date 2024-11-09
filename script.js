let currentPage = 1;
const audio = document.getElementById('backsound');

document.addEventListener("DOMContentLoaded", function() {
    showPage(1);
    playMusic();
});

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.style.display = "block";
        currentPage = pageNumber;
    } else {
        console.error(`Halaman ${pageNumber} tidak ditemukan.`);
    }

    // Memutar video hanya di halaman 5
    if (pageNumber === 5) {
        const videos = document.querySelectorAll(`#page${pageNumber} video`);
        videos.forEach(video => {
            video.play().catch(error => {
                console.error("Video tidak bisa diputar otomatis. Silakan izinkan video di browser Anda.", error);
            });
        });
    } else {
        const allVideos = document.querySelectorAll("video");
        allVideos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
}

function nextPage(pageNumber) {
    showPage(pageNumber);
}

function showSurprise() {
    document.querySelector(".gift").classList.add("explode");
    const continueButton = document.getElementById("continueButton");
    if (continueButton) {
        continueButton.style.display = "inline";
        console.log("Tombol 'continueButton' ditampilkan.");
    } else {
        console.error("Tombol 'continueButton' tidak ditemukan.");
    }
}

function openGift() {
    const finalButton = document.getElementById("finalButton");
    if (finalButton) {
        finalButton.style.display = "inline";
        console.log("Tombol 'finalButton' ditampilkan.");
    } else {
        console.error("Tombol 'finalButton' tidak ditemukan.");
    }
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
    } else {
        if (currentPage !== 5) { // Hanya lanjutkan musik jika tidak di halaman 5
            audio.play().catch(error => {
                console.error("Musik tidak bisa diputar otomatis saat kembali ke tab.", error);
            });
        }
    }
});
