const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic Reticulum", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Great White Shark", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Tomato", correct: false },
            { text: "Avocado", correct: true },
            { text: "Onion", correct: false },
            { text: "Pepper", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
const userForm = document.getElementById('user-form');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const resultsTable = document.getElementById('results-table');
const resultsBody = document.getElementById('results-body');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('user-name-input').value;
    const userEmail = document.getElementById('user-email-input').value;
    document.getElementById('user-name-input').value = '';
    document.getElementById('user-email-input').value = '';
    startGame(userName, userEmail);
});

function startGame(userName, userEmail) {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    resultsTable.style.display = 'none';
    questionContainer.style.display = 'block';
    answerButtons.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const message = document.createElement('div');
    message.id = 'message';
    if (answer.correct) {
        score++;
        message.innerText = "Correct!";
    } else {
        message.innerText = "Wrong!";
    }
    document.body.appendChild(message);
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
});

function showScore() {
    questionContainer.style.display = 'none';
    answerButtons.style.display = 'none';
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreDisplay.innerText = score;
    displayResults();
}

function displayResults() {
    const userName = document.getElementById('user-name-input').value;
    const userEmail = document.getElementById('user-email-input').value;
    resultsTable.style.display = 'block';
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${userName}</td><td>${userEmail}</td><td>${score}</td>`;
    resultsBody.appendChild(newRow);
}

startGame();

