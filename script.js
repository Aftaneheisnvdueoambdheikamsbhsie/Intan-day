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
