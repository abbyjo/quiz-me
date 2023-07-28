//Declarations 
var startButton = document.querySelector("#startButton");
var questionContent = document.querySelector("#content");
var countdown = document.querySelector("#timer");
var inputContent = document.querySelector("#input");
var scoreList = document.querySelector("#scorelist");
var scoresLink = document.querySelector("#scores");
var secondsLeft = 100
var totalScore = 100
var currentIndex = 0;
var results = document.querySelector(".result");


//Questions 
const questions =[
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            {text: "Alerts", correct: true},
            {text: "Booleans", correct: false},
            {text: "Numbers", correct: false},
            {text: "Strings", correct: false},
        ]
    },
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        answers: [
            {text: "Inside the head element", correct: false},
            {text: "Inside the link element", correct: false},
            {text: "Inside the script element", correct: true},
            {text: "In the footer element", correct: false},
        ]
    },
    {
        question: "What operator is used to assign a value to a declared variable?",
        answers: [
            {text: "Double-equal (==)", correct: false},
            {text: "Equal sign (=)", correct: true},
            {text: "Question mark (?)", correct: false},
            {text: "Colon (:)", correct: false},
        ]
    },
    {
        question: "How do we declare a conditional statement in JavaScript?",
        answers: [
            {text: "while loop", correct: false},
            {text: "for loop", correct: false},
            {text: "difference...between", correct: false},
            {text: "if...else", correct: true},
        ]
    },
    {
        question: "What are the two types of scope JavaScript uses?",
        answers: [
            {text: "Surrounding and Inner", correct: false},
            {text: "Global and Local", correct: true},
            {text: "Abroad and Local", correct: false},
            {text: "Outside and Inside", correct: false},
        ]
    },
    {
        question: "What is an object method?",
        answers: [
            {text: "Keys in an object that have a number assigned to it", correct: false},
            {text: "An array saved inside of an object", correct: false},
            {text: "A function that takes an object for an argument", correct: false},
            {text: "A function associated with an object", correct: true},
        ]
    },
    {
        question: "How do we stop a loop from from repeating indefinitely?",
        answers: [
            {text: "We have to explicitly end the loop with the break keyword.", correct: false},
            {text: "A loop will stop executing when the condition is true.", correct: false},
            {text: "A loop will stop executing when the condition is false", correct: true},
            {text: "When we have iterated through half of the condition.", correct: false},
        ]
    },
    {
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        answers: [
            {text: "1", correct: true},
            {text: "0", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with___:",
        answers: [
            {text: "Quotes", correct: false},
            {text: "Curly brackets", correct: false},
            {text: "Parenthesis", correct: true},
            {text: "Square brackets", correct: false},
        ]
    }
];
//Shows quiz questions + adds click event to each answer button
function showQuestion() {
    clearScreen();
    let currentQ = questions[currentIndex];
    questionContent.textContent = currentQ.question;
    currentQ.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        inputContent.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
};

//Validates user answer choice, displays result and moves to next question
function selectAnswer(event){
    let selectedBtn = event.target;
    let isCorrect = selectedBtn.dataset.correct;
    if (isCorrect) {results.textContent = "Right!"}
    else {
        results.textContent = "Wrong~";
        secondsLeft-=10;
        totalScore -= 10;
        };
    currentIndex++;
    if (currentIndex < questions.length){
        showQuestion();
    } else { gameOver()}
};

//Clears screen of previous question and answer buttons
function clearScreen(){inputContent.innerHTML = ""};
//Game over screen
function gameOver() {
    clearScreen();
    results.innerHTML= "";
    questionContent.innerHTML = `Quiz Complete ♪`;
    inputContent.innerHTML = `You scored ${totalScore} points! <br>Save your score below~`
    let scoreKeeper = document.createElement("input");
        scoreKeeper.setAttribute("type", "text");
        scoreKeeper.setAttribute("name", "initials");
        scoreKeeper.setAttribute("placeholder", "Initials Here!");
        results.appendChild(scoreKeeper);
    let submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        results.appendChild(submit)
    let restart = document.createElement("button");
        results.appendChild(restart);
        restart.setAttribute("class", "restartBtn");
        restart.innerHTML = 'Try again?'
    restart.addEventListener("click", function(){location.reload()})
    submit.addEventListener("click", function(event){
        event.preventDefault();
        saveScore();
        seeScores();
    })
}
function saveScore (){
    var user={
        username:document.querySelector("input").value,
        score: totalScore
    };
    localStorage.setItem('user', JSON.stringify(user));
}
//View scores! 
function seeScores() {
    clearScreen();
    results.innerHTML= "";
    questionContent.innerHTML = `✨ Recent Scores ✨`;
    scoreChart = document.createElement("li")
    scoreList.appendChild(scoreChart);
    var highScore = JSON.parse(localStorage.getItem('user'));
    if (highScore !== null) {
        scoreChart.innerHTML = `${highScore.username} - ${highScore.score}`
    }
}
//Start Button + Timer 
startButton.addEventListener("click", function()
{
    var timer = setInterval(function ()
        {secondsLeft--;
        countdown.textContent = `Timer: ${secondsLeft}`;
        if (secondsLeft === 0) {clearInterval(timer); gameOver()};
        }, 1000);
    clearScreen();
    showQuestion()
}
);
//Shows logged highscores upon clicking link
scoresLink.addEventListener("click", seeScores)