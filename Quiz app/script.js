const Questions = [
  {
    question: "What is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the smallest continent in the world?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "What is the Largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    question: "What is the largest ocean in the world?",
    answer: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
];

let question = document.querySelector("#question");
let answers = document.querySelector(".answers");
let nextBtn = document.querySelector(".nextBtn");
let score = 0;
let qno = 0;

function showQuestion() {
  nextBtn.style.visibility = "hidden";
  nextBtn.innerHTML = "Next";
  question.innerHTML = Questions[qno].question;

  Questions[qno].answer.forEach((ans) => {
    let btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.classList.add("btn");
    answers.appendChild(btn);
    if (ans.correct) {
      btn.dataset.correct = ans.correct;
    }
  });
  answers.addEventListener("click", checkAns);
}
function checkAns(e) {
  if (e.target.dataset.correct == "true") {
    score++;
    e.target.classList.add("correct");
  } else {
    e.target.classList.add("incorrect");
  }

  Array.from(answers.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    console.log(button);
    button.disabled = true;
  });
  nextBtn.style.visibility = "visible";
  qno++;
}

function reset() {
  while (answers.firstElementChild) {
    answers.firstElementChild.remove();
  }
}
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  reset();
  if (qno < 4) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  nextBtn.innerHTML = "Start Again";
  qno = 0;
  question.innerHTML = `Your Final Score is ${score} out of 4`;
  score = 0;
  reset();
}
showQuestion();
