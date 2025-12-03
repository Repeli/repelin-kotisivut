const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Theme toggle with localStorage persistence (Why: UX consistency across reloads)
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "light") root.classList.add("light");


toggleBtn?.addEventListener("click", () => {
const toLight = !root.classList.contains("light");
root.classList.toggle("light", toLight);
localStorage.setItem("theme", toLight ? "light" : "dark");
});
function secretAccess() {
    const answer = prompt("Kuka asuntoa tarkkailee ja tutkii ja päivittäin jurtaanin suun makealla tukkii?");

    // Accept multiple correct answers
    const correctAnswers = ["Nisse", "nisse"];

    if (correctAnswers.includes(answer)) {
        window.location.href = "piilosivu.html";
    } else if (answer !== null) {
        alert("Eipä ollunna.");
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

function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
}

if (secretLink) {
    secretLink.addEventListener("mouseenter", () => sparkleActive = true);
    secretLink.addEventListener("mouseleave", () => sparkleActive = false);

    document.addEventListener("mousemove", (e) => {
        if (sparkleActive) {
            createSparkle(e.pageX, e.pageY);
        }
    });
}