//Declarations 
var startButton = document.querySelector("#button");
var questionContent = document.querySelector("#content");
var countdown = document.querySelector("#timer");
var inputContent = document.querySelector("#input");
var secondsLeft = 100
var totalScore = 100

//Function for adding new questions 
function nextQuestion(question,a,b,c,d) {
    questionContent.textContent = `${question}`;
    inputContent.innerHTML = 
        `<button id="A">${a}</button>
        <button id="B">${b}</button>
        <button id="C">${c}</button>
        <button id="D">${d}</button>`
};

//Start of Quiz
startButton.addEventListener("click", function() {
    var timer = setInterval(function (){
        secondsLeft--;
        countdown.textContent = `Timer: ${secondsLeft}`;
        if (secondsLeft === 0) {clearInterval(timer)};
    }, 1000);
    //Question 1
    nextQuestion("Commonly used data types do NOT include:","Strings", "Booleans","Alerts", "Numbers");
    var answers = document.querySelectorAll("button")
    for (i=0; i<answers.length; i++) {answers[i].addEventListener("click", function(event){
        let selectedBtn = event.target;
        let results = document.querySelector(".result")
        if (selectedBtn.id === "C"){results.textContent = "Right!"}
        else {
            results.textContent = "Wrong~";
            secondsLeft-=10;
            totalScore -= 10;
        };
    //Question 2   
})}
        
})