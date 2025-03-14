const questions = [
  {
    question: "Was für eine Valorant Skin Reihe wäre ich?",
    bingoName: "Valo Skin",
    answers: [
      { text: "Ruination", correct: false },
      { text: "Reaver", correct: false },
      { text: "Protocol 781-A", correct: true},
    ] 
  },
  {
    question: "Was ist mein Lieblingsspiel?",
    bingoName: "Fav Game",
    answers: [
      { text: "LoL", correct: true },
      { text: "Risk of Rain 2", correct: true },
      { text: "R6", correct: false },
    ] 
  },
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
    question: "Lieblingssport?",
    bingoName: "Fav Sport",
    answers: [
      { text: "Gym", correct: false },
      { text: "Fahrrad", correct: true },
      { text: "Bettsport", correct: false },
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
    question: "Wie viel euro habe ich in Lol ausgegeben? Euro/Stunde?",
    bingoName: "LoL wasted money",
    answers: [
      { text: "0.1€ pro H", correct: false },
      { text: "0.02€ pro H", correct: true },
      { text: "0.5€ pro H", correct: false },
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
    question: "Spotify Minutes Last year?",
    bingoName: "Spotify Recap",
    answers: [
      { text: "216.000", correct: false },
      { text: "80.000", correct: true },
      { text: "105.000", correct: false },
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
    question: "2 lies one truth:",
    bingoName: "2-L-o-T",
    answers: [
      { text: "Ich war mal moderator bei nebelniek", correct: false },
      { text: "Ich wurde angepisst", correct: true },
      { text: "Ich war nacktbaden mit 5 rndm menschen", correct: false },
    ] 
  },
  {
    question: "Konzert dieses Jahr",
    bingoName: "Konzert",
    answers: [
      { text: "Tyler the Creator", correct: true },
      { text: "Charlie xcx", correct: false },
      { text: "Kendrick", correct: true },
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
  {
    question: "Wo hab ich ein Video gemacht als ich 11 war?",
    bingoName: "LetsPlay video",
    answers: [
      { text: "Overwatch", correct: true },
      { text: "Minecraft", correct: false },
      { text: "Fortnite", correct: false },
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
  bingoItems = getRandomQuestions(questions, 16);
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
  remainingQuestions = getRandomQuestions(questions, 16);
  generateBingoGrid();
  displayQuestion();
}

document.addEventListener("DOMContentLoaded", startQuiz);