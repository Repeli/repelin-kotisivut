function checkAnswer(correct, letter, nextPage) {
const input = document.getElementById('answer');
const value = input.value.trim().toLowerCase();


if (value === correct.toLowerCase()) {
let letters = JSON.parse(localStorage.getItem('letters') || '[]');
letters.push(letter);
localStorage.setItem('letters', JSON.stringify(letters));


alert(`Oikein! Sait kirjaimen: ${letter}`);
window.location.href = nextPage;
} else {
alert('Eipä ollunna.');
}
}
// ❄️ Snow animation
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flakes = [];

for (let i = 0; i < 120; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() + 1
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    }

    ctx.fill();
    updateSnow();
}

let angle = 0;

function updateSnow() {
    angle += 0.001;

    for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];

        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 2;

        if (f.y > canvas.height) {
            flakes[i] = {
                x: Math.random() * canvas.width,
                y: 0,
                r: f.r,
                d: f.d
            };
        }
    }
}

setInterval(drawSnow, 33);
// Sparkle effect for hidden link
const secretLink = document.getElementById("secretLink");
let sparkleActive = false;

function checkFinal(correct) {
//const value = document.getElementById('finalAnswer').value.trim().toLowerCase();
//const letters = JSON.parse(localStorage.getItem('letters') || '[]').join('');
const value = document.getElementById(inputId)?.value.trim().toLowerCase();
if (!value) return;
if (value === correct.toLowerCase())
    {
showModal('🎉 No siellähän se! Äkkiä sieltä katsomaan!');
} else {
showModal(`Väärin! Keräämäsi kirjaimet: ${letters}`);
}
}
// === Progress handling ===
const TOTAL_PAGES = 6; // change when needed


function getProgress() {
return JSON.parse(localStorage.getItem("lahjamysteeri_progress") || "[]");
}


function addLetter(letter) {
const progress = getProgress();
progress.push(letter);
localStorage.setItem("lahjamysteeri_progress", JSON.stringify(progress));
}


function renderProgress() {
const el = document.getElementById("progress");
if (!el) return;
const count = getProgress().length;
el.textContent = `Kirjaimia kerätty: ${count} / ${TOTAL_PAGES}`;
}


// === Modal system ===
const modal = document.createElement("div");
modal.className = "modal-wrapper";
modal.style.display = "none";
modal.innerHTML = `
<div class="modal-backdrop"></div>
<div class="modal">
<h2 id="modalTitle"></h2>
<p id="modalText"></p>
<button id="modalOk">OK</button>
</div>
`;
document.body.appendChild(modal);


let nextPageAfterSuccess = null;


document.getElementById("modalOk").addEventListener("click", () => {
modal.style.display = "none";
if (nextPageAfterSuccess) {
window.location.href = nextPageAfterSuccess;
}
});


function showModal(type, text) {
modal.className = `modal-wrapper ${type}`;
document.getElementById("modalTitle").textContent =
type === "success" ? "🎄 Oikein!" : "❄️ Väärin";
document.getElementById("modalText").textContent = text;
modal.style.display = "flex";
}


// === Answer validation ===
function checkAnswer({ inputId, correctAnswer, letter, nextPage }) {
const value = document.getElementById(inputId)?.value.trim().toLowerCase();
if (!value) return;


if (value === correctAnswer.toLowerCase()) {
addLetter(letter);
nextPageAfterSuccess = nextPage;
showModal("success", `Sait kirjaimen: ${letter}`);
} else {
nextPageAfterSuccess = null;
showModal("error", "Yritä uudelleen 🎅");
}
}


renderProgress();