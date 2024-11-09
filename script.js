let currentPage = 1;
const audio = document.getElementById('backsound');
let video;

// Pastikan audio diputar saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    showPage(1);
    playMusic();
});

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    const targetPage = document.getElementById(`page${pageNumber}`);
    
    if (targetPage) {
        targetPage.style.display = "block";
    } else {
        console.error(`Halaman dengan ID "page${pageNumber}" tidak ditemukan.`);
    }

    // Mengatur video jika ada di halaman 5
    if (pageNumber === 5) {
        video = document.querySelector('#page5 video');
        if (video) {
            video.play().catch(error => {
                console.error("Video tidak bisa diputar otomatis. Silakan izinkan video di browser Anda.", error);
            });
        }
    } else if (video) {
        // Berhenti memutar video jika bukan halaman 5
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

// Menjeda audio dan video jika pengguna beralih ke tab lain
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        audio.pause(); // Menjeda musik saat pengguna beralih tab
        if (video) {
            video.pause(); // Menjeda video jika ada
        }
    } else {
        audio.play().catch(error => {
            console.error("Musik tidak bisa diputar otomatis. Silakan izinkan audio di browser Anda.", error);
        }); // Melanjutkan musik saat pengguna kembali
        if (currentPage === 5 && video) {
            video.play().catch(error => {
                console.error("Video tidak bisa diputar otomatis. Silakan izinkan video di browser Anda.", error);
            }); // Melanjutkan video jika pada halaman 5
        }
    }
});
