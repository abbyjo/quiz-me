//TO-DO: set up 2nd event listener for any button click 
    //TO-DO: (if..else)when button clicked, if true next q pops up
        //TO-DO: if false timer loses 10 seconds and next q pops up
//TO-DO: maybe set up for loop? (for each time button pressed ^^^ happens)

//TO-DO: when all q's are answered or timer = 0, game is over (game over screen)
//TO-DO: game over screen: save initials and score (log both into localStorage)
//TO-DO: can view high scores by clicking #highscores
    //TO-DO: clicking highscores section reveals logged info.. ? 
    // promble: how to log multiple high scores?? 
//============================================ CODE BELOW
    //TO-DO:set up event listener for first button click --CHECK
    //TO-DO: set up timer start 
    //TO-DO: starts first question
var startButton = document.querySelector("#button");
var questionContent = document.querySelector("#content");
var countdown = document.querySelector("#timer");
var inputContent = document.querySelector("#input");
var secondsLeft = 100

startButton.addEventListener("click", function() {
    var timer = setInterval(function (){
        countdown.textContent = `Timer: ${secondsLeft}`;
        secondsLeft--;
    }, 1000);
    questionContent.textContent = "Question 1";
    inputContent.innerHTML = "<ul><li><button>Answer 1</button></li><li><button>Answer 2</button></li><li><button>Answer 3</button></li><li><button>Answer 4</button></li>"
})