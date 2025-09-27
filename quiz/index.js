const questions = [
  {
    question: "Wie groß bin ich?",
    bingoName: "Größe",
    answers: [
      { text: "190", correct: true },
      { text: "193", correct: false },
      { text: "194", correct: false },
    ] 
  },
  {
    question: "Wann bin ich geboren?",
    bingoName: "B-Day",
    answers: [
      { text: "16.08.2005", correct: false },
      { text: "12.05.2005", correct: false },
      { text: "16.07.2005", correct: true },
    ] 
  },
  {
    question: "Lieblingsessen?",
    bingoName: "Fav Food",
    answers: [
      { text: "Pizza Hawaii", correct: false },
      { text: "Keins", correct: true },
      { text: "Kürbissuppe", correct: false },
    ] 
  },
  {
    question: "Lieblingsgenre?",
    bingoName: "Fav Genre",
    answers: [
      { text: "HipHop", correct: false },
      { text: "Rock", correct: true },
      { text: "Metalcore", correct: false },
    ] 
  },
  {
    question: "Lieblingspokemon?",
    bingoName: "Fav Pokemon",
    answers: [
      { text: "Chelast", correct: true },
      { text: "Charizard", correct: false },
      { text: "Sheinux", correct: false },
    ] 
  },
  {
    question: "Was ist meine Lieblings Fun Getränke?",
    bingoName: "Fun Drink",
    answers: [
      { text: "Spezi", correct: false },
      { text: "Cola Zero", correct: false },
      { text: "Mate", correct: true },
    ] 
  },
  {
    question: "Spiritanimal?",
    bingoName: "Spiritanimal",
    answers: [
      { text: "Faultier", correct: false },
      { text: "Igel", correct: false },
      { text: "Kuh", correct: true },
    ] 
  },
  {
    question: "Lieblingsfach?",
    bingoName: "Fav Fach",
    answers: [
      { text: "Mathe", correct: true },
      { text: "Informatik", correct: false },
      { text: "Grafikdesign", correct: false },
    ] 
  },
];

const quizContainer = document.getElementById("question-con");
const bingoContainer = document.getElementById("bingo-grid");
let remainingQuestions;
let bingoItems;

function getRandomQuestions(arr, num) {
  let shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function displayQuestion() {
  if (remainingQuestions.length === 0) {
    quizContainer.innerHTML = "<h2>Quiz beendet!</h2>";
    return;
  }
  
  let question = remainingQuestions.pop();
  quizContainer.innerHTML = `
    <h2>${question.question}</h2>
    <div class="answers">
      ${question.answers.map((answer, index) => `
        <button class="btn" data-correct="${answer.correct}" data-bingo="${question.bingoName}">
          ${answer.text}
        </button>`).join('')}
    </div>
  `;
  document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-correct") === "true") {
        button.classList.add("correct");
        markBingoField(button.getAttribute("data-bingo"));
      } else {
        button.classList.add("wrong");
      }
      setTimeout(displayQuestion, 1000); // Nächste Frage nach 1 Sekunde
    });
  });
}

function generateBingoGrid() {
  bingoItems = getRandomQuestions(questions, 9);
  bingoContainer.innerHTML = bingoItems.map(q => `
    <div class="bingo-item" data-bingo="${q.bingoName}">${q.bingoName}</div>
  `).join('');
}

function markBingoField(bingoName) {
  document.querySelectorAll(".bingo-item").forEach(item => {
    if (item.getAttribute("data-bingo") === bingoName) {
      item.classList.add("bingo-marked");
    }
  });
}

function startQuiz() {
  remainingQuestions = getRandomQuestions(questions, 9);
  generateBingoGrid();
  displayQuestion();
}

document.addEventListener("DOMContentLoaded", startQuiz);