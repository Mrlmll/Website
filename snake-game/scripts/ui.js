export function drawBoard() {
    const gridEl = document.getElementById("game-grid");
    let counter = 0;
    let boardHTML = ``;
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            if (counter % 2 === 0) {
                boardHTML += `<div class="bg-tile" id="${i},${j}"></div>`
            } else {
                boardHTML += `<div class="bg-tile" id="${i},${j}"></div>`
            }
            counter++;
        };  
        counter+=1;
    };
    gridEl.innerHTML = boardHTML;
}

export function drawSnake(snake){
    for (let i = 0; i < snake.length; i++) {
        const location = snake[i];
        const snakeEl = document.getElementById(`${location}`)
        if (snakeEl === null) {
            continue;
        }
        snakeEl.setAttribute("class", "snake")
    }
}
export function drawFood(food){
    const foodEl = document.getElementById(`${food}`);
    foodEl.setAttribute("class", "food")
}