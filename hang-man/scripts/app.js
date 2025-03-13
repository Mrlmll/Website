import { words } from "./countries-and-cities.js";
import { renderWord, updateImg, updateKeyboard } from "./ui.js";

function getRandomWord() {
    const wordIndex = Math.floor(Math.random() * words.length);
    return words[wordIndex]
}
function checkGameState() {
    return (0 >= attempts) || word.split("").every(letter => guessedChar.includes(letter));
}

const word = getRandomWord();
console.log(word);

let attempts = 7;
let guessedChar = [];

renderWord(word, guessedChar);
checkGameState();

window.addEventListener("keydown", (e) => {
        const letter = e.key.toLowerCase();
        attempts = updateImg(attempts, letter, word, guessedChar);
        guessedChar.push(letter);
        renderWord(word, guessedChar);
        updateKeyboard(word, guessedChar);
});

document.querySelectorAll('.button')
.forEach((button) => {
  const letter = button.innerHTML;
  button.addEventListener('click', () => {
        attempts = updateImg(attempts, letter, word, guessedChar);
        guessedChar.push(letter);
        renderWord(word, guessedChar);
        updateKeyboard(word, guessedChar);
    });
  });
