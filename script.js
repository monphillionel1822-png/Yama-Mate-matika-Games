let num1, num2, operator, correctAnswer;
let score = 0;
let timeLeft = 60;
let timer;
let gameActive = false;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  const operators = ["+", "-", "*"];
  operator = operators[Math.floor(Math.random() * operators.length)];

  if (operator === "+") {
    correctAnswer = num1 + num2;
  } else if (operator === "-") {
    correctAnswer = num1 - num2;
  } else {
    correctAnswer = num1 * num2;
  }

  document.getElementById("question").innerText = `${num1} ${operator} ${num2} = ?`;
}

function checkAnswer() {
  if (!gameActive) return;

  const userAnswer = parseInt(document.getElementById("answer").value);
  const resultText = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    score++;
    resultText.innerText = "✅ Benar!";
    resultText.style.color = "green";
  } else {
    resultText.innerText = `❌ Salah! Jawaban benar: ${correctAnswer}`;
    resultText.style.color = "red";
  }

  document.getElementById("score").innerText = "Skor: " + score;
  document.getElementById("answer").value = "";
  generateQuestion();
}

function startGame() {
  score = 0;
  timeLeft = 60;
  gameActive = true;

  document.getElementById("score").innerText = "Skor: " + score;
  document.getElementById("timer").innerText = "Waktu: " + timeLeft + " detik";
  document.getElementById("result").innerText = "";

  document.getElementById("answer").disabled = false;
  document.getElementById("btnAnswer").disabled = false;
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";

  generateQuestion();

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Waktu: " + timeLeft + " detik";

    if (timeLeft <= 0) {
      clearInterval(timer);
      gameActive = false;
      endGame();
    }
  }, 1000);
}

function endGame() {
  document.getElementById("result").innerText = `⏰ Waktu habis,Ahori waktu! Skor akhir: ${score}`;
  document.getElementById("result").style.color = "blue";
  document.getElementById("answer").disabled = true;
  document.getElementById("btnAnswer").disabled = true;
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
  startGame();
}

