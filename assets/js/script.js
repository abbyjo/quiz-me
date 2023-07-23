//TO-DO: set up 2nd event listener for any button click 
    //TO-DO: (if..else)when button clicked, if true next q pops up
        //TO-DO: if false timer loses 10 seconds and next q pops up
//TO-DO: maybe set up for loop? (for each time button pressed ^^^ happens)

//TO-DO: when all q's are answered or timer = 0, game is over (game over screen)
//TO-DO: game over screen: save initials and score (log both into localStorage)
//TO-DO: can view high scores by clicking #highscores
    //TO-DO: clicking highscores section reveals logged info.. ? 
    // promble: how to log multiple high scores?? 
//===================== CODE BELOW
var startButton = document.querySelector("#button");
var questionContent = document.querySelector("#content");
var countdown = document.querySelector("#timer");
var inputContent = document.querySelector("#input");
var secondsLeft = 100

startButton.addEventListener("click", function() {
    var timer = setInterval(function (){
        countdown.textContent = `Timer: ${secondsLeft}`;
        secondsLeft--;
        if (secondsLeft === 0) {clearInterval(timer)};
    }, 1000);
    questionContent.textContent = "Commonly used data types do NOT include:";
    inputContent.innerHTML = 
        `<ul>
            <li><button id="A1">1.Strings</button></li>
            <li><button id="A2">2.Booleans</button></li>
            <li><button id="A3">3.Alerts</button></li>
            <li><button id="A4">4.Numbers</button></li>
        </ul>`
})