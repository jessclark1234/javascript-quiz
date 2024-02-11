var score = document.getElementById
var storage = localStorage.getItem("score");

var time = document.querySelector(".time");
var timeleft = 180;

function timer() {
  var timeInterval = setInterval(function () {
    timeleft--;
    time.textContent = timeleft + "seconds remaining";

    if (timeleft === 0) {
      clearInterval(timeInterval);
      showHighscore();
    }
  }, 1000);
}

const questions = [
  {
    question: "What is the purpose of retinol?",
    answers: [
      { text: "To treat acne", correct: false },
      { text: "To fight aging of the skin", correct: false },
      { text: "To treat acne and fight aging of the skin", correct: true },
      { text: "To improve eyesight", correct: false }
    ]
  },
  {
    question: "Why should you use moisturizer?",
    answers: [
      { text: "To reduce skin problems", correct: true },
      { text: "It smells nice", correct: false },
      { text: "no reason to use it", correct: false },
      { text: "Will make you grow 3 inches taller", correct: false }
    ]
  },
  {
    question: "What happens when you mix benzoyl peroxide and BHAs?",
    answers: [
      { text: "Plants change colors", correct: false },
      { text: "Can cause skin peeling and redness", correct: true },
      { text: "Nothing", correct: false },
      { text: "Both A and C", correct: false }
    ]
  },
  {
    question: "How often should you wash your face?",
    answers: [
      { text: "When it gets dirty", correct: false },
      { text: "Once a week", correct: false },
      { text: "Once a month", correct: false },
      { text: "At least once a day", correct: true }
    ]
  },
  {
    question: "Should you use Vitamin C?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
      { text: "Maybe", correct: false },
      { text: "Can you repeat the question?", correct: false }
    ]
  }
];

const questionEl = document.getElementById("questions");
const ansBtns = document.getElementById("ans-btn");

let currentQIndex = 0;
let grade = 0;

function startQuiz() {
  currentQIndex = 0;
  score = 0;
  showQuestion();
  timer();
}



function showQuestion() {
  let currentQ = questions[currentQIndex];
  let questionNumber = currentQIndex + 1;
  questionEl.innerHTML = questionNumber + ". " + currentQ.question;
  ansBtns.innerHTML = ""
  currentQ.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text
      btn.classList.add("btn")
      ansBtns.appendChild(btn);
    btn.dataset.correct = answer.correct;
    btn.addEventListener("click", selectAns);
  });
}

function selectAns(event) {
  var choice = event.target.dataset.correct;
  if (choice === true) {
    event.target.classList.add('green')
    timeleft += 5;
  } else {
    event.target.classList.add('red')
    timeleft -= 10;
  }
  currentQIndex++
  setTimeout(function() {
    if (currentQIndex < questions.length) {
      showQuestion()
    } else {
      alert("Game over");
    }
  }, 1000)
}

function showHighscore() {
  time.textContent = " ";
  var highscore = document.createElement("div");


}

startQuiz();
