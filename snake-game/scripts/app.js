import { drawBoard, drawSnake, drawFood, updateScore, updateTimer } from "./ui.js";

let lastTime = 0;
const updateInterval = 200; // Update alle 200ms (5 Bewegungen pro Sekunde)
let snake = ["10,5", "10,4", "10,3"];
let food = "10,16";
let direction = "right";
let animationId;
let isGameOver = false;
let score = 0;
let isGameRunning = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

function gameLoop(currentTime) {
    if (isGameOver) return;
    if (currentTime - lastTime >= updateInterval) {
        lastTime = currentTime;


        updateGame();  // Hier kommt deine Spiellogik rein
        renderGame(snake, food);  // Hier wird das Spiel gezeichnet/aktualisiert
    }

    animationId = requestAnimationFrame(gameLoop);
}

renderGame(snake, food)
setupEventListeners();
document.addEventListener("keydown", () => {
    if (!isGameRunning) {  // Nur starten, wenn es noch nicht läuft
        isGameRunning = true;
        requestAnimationFrame(gameLoop);
        startTimer();
    }
});

document.getElementById("reset-button").addEventListener("click", () => {
    location.reload();
})



function renderGame(snake, food){
    drawBoard();
    drawSnake(snake);
    drawFood(food);
}

function updateGame(){
    moveSnake(direction);
    updateTimer(elapsedTime)
}

function moveSnake(direction){
    let snakeBackup = snake;
    if(direction === "right"){
        const splitHeadLocation = snake[0].split(",")
        const yInt = +splitHeadLocation[1];
        if(yInt >= 19){
            snake = snakeBackup;
            endGame();
        }
        const newHead = `${splitHeadLocation[0]},${yInt + 1}`;
        if(newHead === food){
            snake = [newHead].concat(snake);
            newFood()
        } else if (snakeBackup.includes(newHead)) {
            snake = snakeBackup;
            endGame();
        } else {
            snake.pop();
            snake = [newHead].concat(snake);
        }
    } else if(direction === "up"){
        const splitHeadLocation = snake[0].split(",")
        const xInt = +splitHeadLocation[0];
        if(xInt <= 0){
            snake = snakeBackup;
            endGame();
        }
        const newHead = `${xInt - 1},${splitHeadLocation[1]}`;
        if(newHead === food){
            snake = [newHead].concat(snake);
            newFood()
        } else if (snakeBackup.includes(newHead)) {
            snake = snakeBackup;
            endGame();
        } else {
            snake.pop();
            snake = [newHead].concat(snake);
        }
    } else if(direction === "left"){
        const splitHeadLocation = snake[0].split(",")
        const yInt = +splitHeadLocation[1];
        if(yInt <= 0){
            snake = snakeBackup;
            endGame();
        }
        const newHead = `${splitHeadLocation[0]},${yInt - 1}`;
        if(newHead === food){
            snake = [newHead].concat(snake);
            newFood()
        } else if (snakeBackup.includes(newHead)) {
            snake = snakeBackup;
            endGame();
        } else {
            snake.pop();
            snake = [newHead].concat(snake);
        }
    } else if(direction === "down"){
        const splitHeadLocation = snake[0].split(",")
        const xInt = +splitHeadLocation[0];
        if(xInt >= 19){
            snake = snakeBackup;
            endGame();
        }
        const newHead = `${xInt + 1},${splitHeadLocation[1]}`;
        if(newHead === food){
            snake = [newHead].concat(snake);
            newFood()
        } else if (snakeBackup.includes(newHead)) {
            snake = snakeBackup;
            endGame();
        } else {
            snake.pop();
            snake = [newHead].concat(snake);
        }
    }
};

function setupEventListeners() {
    document.addEventListener("keydown", handleKeyPress);
}

function handleKeyPress(event) {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
}

function newFood(){
    const xCord = Math.floor(Math.random() * 20);
    const yCord = Math.floor(Math.random() * 20);
    const newFoodLoc = `${xCord},${yCord}`;
    if(snake.includes(newFoodLoc)){
        newFood()
    } else {
        food = newFoodLoc;
        score++;
    }
    updateScore(score);
    
}

function endGame(){
    isGameOver = true;
    console.log("lost");
    cancelAnimationFrame(animationId);
    stopTimer()
    document.getElementById("reset").setAttribute("class", "reset-on")
}


function startTimer() {
    startTime = Date.now(); // Startzeit speichern
    timerInterval = setInterval(() => {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    }, 1000); // Alle 1000 ms (1 Sekunde) aktualisieren
}

function stopTimer() {
    clearInterval(timerInterval); // Timer stoppen
}
