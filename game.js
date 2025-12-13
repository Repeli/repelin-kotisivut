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


function checkFinal(correct) {
const value = document.getElementById('finalAnswer').value.trim().toLowerCase();
const letters = JSON.parse(localStorage.getItem('letters') || '[]').join('');


if (value === correct.toLowerCase()) {
alert('🎉 Onneksi olkoon! Löysit lahjan!');
localStorage.removeItem('letters');
} else {
alert(`Väärin! Keräämäsi kirjaimet: ${letters}`);
}
}