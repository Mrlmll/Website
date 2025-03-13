export function renderWord(word, guessedChar){
    let renderHTML = '';
    const containerEl = document.getElementById('word-container');
    renderHTML += '<div class="top-word">';
    for (let index = 0; index < word.length; index++) {
        const char = word[index];
        const hasChar = guessedChar.includes(char);
        renderHTML += `<div>${hasChar ? char : ''}</div>`;
    }
    renderHTML += '</div>';
    containerEl.innerHTML = renderHTML;
}

export function updateKeyboard(word, guessedChar){
    for (let i = 0; i < guessedChar.length; i++) {
        const element = guessedChar[i];
        const button = document.getElementById(`${element}`);
        if(word.includes(element)){
            button.setAttribute("class", "button-correct")
        } else {
            button.setAttribute("class", "button-false");
        }
    }
}

export function updateImg(attempts, letter, word, guessedChar){
    const attemptsNumberEl = document.getElementById("attempts");
    const imgEl = document.getElementById('img');
    if(word.includes(letter)){
        return attempts
    } else if(guessedChar.includes(letter)){
        return attempts
    } else {
        attempts--;
        attemptsNumberEl.innerText = attempts;
        imgEl.setAttribute("src", `/images/hangman-${attempts}.png`)
        return attempts;
    }
};