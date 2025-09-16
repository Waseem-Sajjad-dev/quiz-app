const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which HTML tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
  { question: "Which year was JavaScript created?", options: ["1995", "1990", "2000", "1998"], answer: "1995" },
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/* */", "#", "<!-- -->"], answer: "//" },
  { question: "Inside which HTML element do we put the JavaScript?", options: ["<script>", "<js>", "<javascript>", "<code>"], answer: "<script>" },
  { question: "Which CSS property controls the text size?", options: ["font-size", "text-style", "font-style", "text-size"], answer: "font-size" },
  { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "font", "styles"], answer: "style" },
  { question: "Which operator is used for assignment in JavaScript?", options: ["=", "==", "===", ":"], answer: "=" },
  { question: "Which method converts JSON to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], answer: "JSON.parse()" },
  { question: "What is the default value of a variable declared with var?", options: ["undefined", "null", "0", "''"], answer: "undefined" },
  { question: "Which HTML element defines the title of a document?", options: ["<title>", "<head>", "<meta>", "<header>"], answer: "<title>" },
  { question: "Which JavaScript function is used to display an alert box?", options: ["alert()", "msg()", "prompt()", "confirm()"], answer: "alert()" },
  { question: "Which HTML element is used to define a table row?", options: ["<tr>", "<td>", "<th>", "<table>"], answer: "<tr>" },
  { question: "What does DOM stand for?", options: ["Document Object Model", "Display Object Management", "Data Object Model", "Document Orientation Model"], answer: "Document Object Model" },
  { question: "Which JavaScript keyword is used to define a constant?", options: ["const", "let", "var", "constant"], answer: "const" },
  { question: "Which HTML attribute specifies an image's URL?", options: ["src", "href", "link", "url"], answer: "src" },
  { question: "Which CSS property changes the background color?", options: ["background-color", "color", "bgcolor", "back-color"], answer: "background-color" },
  { question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
  { question: "Which symbol is used for multiplication in JavaScript?", options: ["*", "x", "×", "mul"], answer: "*" },
  { question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
  { question: "Which CSS property sets the font family?", options: ["font-family", "text-font", "font-style", "text-family"], answer: "font-family" },
  { question: "Which method removes the last element from an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
  { question: "Which JavaScript event occurs when a user clicks an element?", options: ["onclick", "onhover", "onchange", "onfocus"], answer: "onclick" },
  { question: "Which HTML element is used to specify a footer?", options: ["<footer>", "<bottom>", "<section>", "<end>"], answer: "<footer>" },
  { question: "Which method converts a JavaScript object to a JSON string?", options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.toString()"], answer: "JSON.stringify()" },
  { question: "Which operator is used for strict equality in JavaScript?", options: ["===", "==", "=", "!="], answer: "===" },
  { question: "Which HTML element is used for the largest heading?", options: ["<h1>", "<h6>", "<header>", "<head>"], answer: "<h1>" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const quizContainer = document.getElementById("quiz-container");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(li, currentQuiz.answer));
    optionsEl.appendChild(li);
  });
}

function selectOption(selectedLi, correctAnswer) {
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach(li => li.style.pointerEvents = "none");

  if (selectedLi.textContent === correctAnswer) {
    selectedLi.classList.add("correct");
    score++;
  } else {
    selectedLi.classList.add("wrong");
    allOptions.forEach(li => {
      if (li.textContent === correctAnswer) li.classList.add("correct");
    });
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
  resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  quizContainer.style.display = "block";
  nextBtn.style.display = "inline-block";
  resultEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  loadQuestion();
});

// Initialize first question
loadQuestion();
