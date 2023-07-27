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
        question: "QUESTION 1",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false},
        ]
    },
    {
        question: "QUESTION 2",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false},
        ]
    },
    {
        question: "QUESTION 3",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false},
        ]
    },
    {
        question: "QUESTION 4",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: true},
        ]
    },
    {
        question: "QUESTION 5",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false},
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