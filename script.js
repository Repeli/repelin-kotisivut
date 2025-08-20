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