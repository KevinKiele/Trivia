function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    gameOverHTML += "<h3>Thanks for playing and well done! If you'd like to fire up a new game, click Game Selection in the Navigation bar.</h>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
// create questions
var questions = [
new Question("Which of the following sports is not part of the triathlon?", ['Cycling', 'Swimming', 'Running', 'Horse-Riding'], "Horse-Riding"),
new Question("At which bridge does the annual Oxford and Cambridge boat race start?", ['Hammersmith', 'Vauxhall ', 'Battersea', 'Putney'], "Putney"),
new Question("How many times did Martina Navratilova win the Wimbledon Singles Championship?", ['Ten', 'Seven', 'Eight', 'Nine'], "Nine"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
