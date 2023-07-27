//Declarations 
var startButton = document.querySelector("#startButton");
var questionContent = document.querySelector("#content");
var countdown = document.querySelector("#timer");
var inputContent = document.querySelector("#input");
var secondsLeft = 100
var totalScore = 100
var currentIndex = 0;

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

//Validates user answer choice + displays  result
function selectAnswer(event){
    let selectedBtn = event.target;
    let results = document.querySelector(".result");
    let isCorrect = selectedBtn.dataset.correct;
    if (isCorrect) {results.textContent = "Right!"}
    else {
        results.textContent = "Wrong~";
        secondsLeft-=10;
        totalScore -= 10;
        };
}
//Clears screen of previous question and answer buttons
function clearScreen(){inputContent.innerHTML = ""};

//Start Button + Timer 
startButton.addEventListener("click", function()
{
    var timer = setInterval(function ()
        {secondsLeft--;
        countdown.textContent = `Timer: ${secondsLeft}`;
        if (secondsLeft === 0) {clearInterval(timer)};
        }, 1000);
    clearScreen();
    showQuestion()
}
);







// //Function for adding new questions 
// function nextQuestion(question,a,b,c,d) {
//     questionContent.textContent = `${question}`;
//     inputContent.innerHTML = 
//         `<button id="A">${a}</button>
//         <button id="B">${b}</button>
//         <button id="C">${c}</button>
//         <button id="D">${d}</button>`
// };

// //Start of Quiz
// startButton.addEventListener("click", function() {
//     var timer = setInterval(function (){
//         secondsLeft--;
//         countdown.textContent = `Timer: ${secondsLeft}`;
//         if (secondsLeft === 0) {clearInterval(timer)};
//     }, 1000);
//     //Question 1
//     nextQuestion("Commonly used data types do NOT include:","Strings", "Booleans","Alerts", "Numbers");
//     var answers = document.querySelectorAll("button")
//     for (i=0; i<answers.length; i++) {answers[i].addEventListener("click", function(event){
//         let selectedBtn = event.target;
//         let results = document.querySelector(".result")
//         if (selectedBtn.id === "C"){results.textContent = "Right!"}
//         else {
//             results.textContent = "Wrong~";
//             secondsLeft-=10;
//             totalScore -= 10;
//         };
//     //Question 2   
// })}
        
// })