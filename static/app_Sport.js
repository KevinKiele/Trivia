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
    gameOverHTML += "<h3>Return to Lobby Selection</h>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
// create questions
var questions = [
new Question("Which of the following sports is not part of the triathlon?", ['Cycling', 'Swimming', 'Running', 'Horse-Riding'], "Horse-Riding"),
new Question("At which bridge does the annual Oxford and Cambridge boat race start?", ['Hammersmith', 'Vauxhall ', 'Battersea', 'Putney'], "Putney"),
new Question("How many times did Martina Navratilova win the Wimbledon Singles Championship?", ['Ten', 'Seven', 'Eight', 'Nine'], "Nine"),
new Question("With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?", ['Benetton', 'Ferrari', 'Mercedes', 'Jordan'], "Jordan"),
new Question("What cricketing term denotes a batsman being dismissed with a score of zero?", ['Bye', 'Beamer', 'Carry', 'Duck'], "Duck"),
new Question("Who was the British professional wrestler Shirley Crabtree better known as?", ['Giant Haystacks', 'Kendo Nagasaki', 'Masambula', 'Big Daddy'], "Big Daddy"),
new Question("What is the nickname of Northampton town&#039;s rugby union club?", ['Harlequins', 'Saracens', 'Wasps', 'Saints'], "Saints"),
new Question("Which English football club has the nickname &#039;The Foxes&#039;?", ['Northampton Town', 'Bradford City', 'West Bromwich Albion', 'Leicester City'], "Leicester City"),
new Question("How many soccer players should be on the field at the same time?", ['20', '24', '26', '22'], "22"),
new Question("In what sport is a &quot;shuttlecock&quot; used?", ['Table Tennis', 'Rugby', 'Cricket', 'Badminton'], "Badminton"),
new Question("Which team won the 2015-16 English Premier League?", ['Liverpool', 'Cheslea', 'Manchester United', 'Leicester City'], "Leicester City"),
new Question("A stimpmeter measures the speed of a ball over what surface?", [' Football Pitch', 'Cricket Outfield', 'Pinball Table', 'Golf Putting Green'], "Golf Putting Green"),
new Question("Which Formula One driver was nicknamed &#039;The Professor&#039;?", ['Ayrton Senna', 'Niki Lauda', 'Emerson Fittipaldi', 'Alain Prost'], "Alain Prost"),
new Question("How many scoring zones are there on a conventional dart board?", ['62', '42', '102', '82'], "82"),
new Question("In a game of snooker, what colour ball is worth 3 points?", ['Yellow', 'Brown', 'Blue', 'Green'], "Green"),
new Question("With which doubles partner did John McEnroe have most success?", ['Mark Woodforde', 'Michael Stich', 'Mary Carillo', 'Peter Fleming'], "Peter Fleming"),
new Question("The F1 season of 1994 is remembered for what tragic event?", ['The Showdown (Australia)', 'Verstappen on Fire (Germany)', 'Schumacher&#039;s Ban (Britain)', 'Death of Ayrton Senna (San Marino)'], "Death of Ayrton Senna (San Marino)"),
new Question("What is the highest belt you can get in Taekwondo?", ['White', 'Red', 'Green', 'Black'], "Black"),
new Question("The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?", ['August 23', 'August 19', 'August 17', 'August 21'], "August 21"),
new Question("Which country will host the 2020 Summer Olympics?", ['China', 'Australia', 'Germany', 'Japan'], "Japan"),
new Question("Which country is hosting the 2018 FIFA World Cup?", ['Germany', 'United States', 'Saudi Arabia', 'Russia'], "Russia"),
new Question("Which country is hosting the 2022 FIFA World Cup?", ['Uganda', 'Vietnam', 'Bolivia', 'Qatar'], "Qatar"),
new Question("Who won the 2015 Formula 1 World Championship?", ['Nico Rosberg', 'Sebastian Vettel', 'Jenson Button', 'Lewis Hamilton'], "Lewis Hamilton"),
new Question("What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?", ['0 - 1', '3 - 4', '16 - 0', '7 - 1'], "7 - 1"),
new Question("Which team was the 2015-2016 NBA Champions?", ['Golden State Warriors', 'Toronto Raptors', 'Oklahoma City Thunders', 'Cleveland Cavaliers'], "Cleveland Cavaliers"),
new Question("Which team was the 2014-2015 NBA Champions?", ['Cleveland Cavaliers', 'Houston Rockets', 'Atlanta Hawks', 'Golden State Warriors'], "Golden State Warriors"),
new Question("Where was the Games of the XXII Olympiad held?", ['Barcelona', 'Tokyo', 'Los Angeles', 'Moscow'], "Moscow"),
new Question("Josh Mansour is part of what NRL team?", ['Melbourne Storm', 'Sydney Roosters', 'North Queensland Cowboys', 'Penrith Panthers'], "Penrith Panthers"),
new Question("Which car manufacturer won the 2016 24 Hours of Le Mans?", ['Toyota', 'Audi', 'Ferrari', 'Porsche'], "Porsche"),
new Question("Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?", ['Insigne', 'Barzagli', 'Giaccherini', 'Pelle'], "Pelle"),
new Question("Which male player won the gold medal of table tennis singles in 2016 Olympics Games?", ['Zhang Jike (China)', 'Jun Mizutani (Japan)', 'Vladimir Samsonov (Belarus)', 'Ma Long (China)'], "Ma Long (China)"),
new Question("Which soccer team won the Copa Am&eacute;rica 2015 Championship ?", ['Argentina', 'Brazil', 'Paraguay', 'Chile'], "Chile"),
new Question("Which soccer team won the Copa Am&eacute;rica Centenario 2016?", ['Argentina', 'Brazil', 'Colombia', 'Chile'], "Chile"),
new Question("Which team won 2014 FIFA World Cup in Brazil?", ['Argentina', 'Brazil', 'Netherlands', 'Germany'], "Germany"),
new Question("How many points did LeBron James score in his first NBA game?", ['19', '69', '41', '25'], "25"),
new Question("What national team won the 2016 edition of UEFA European Championship?", ['France', 'Germany', 'England', 'Portugal'], "Portugal"),
new Question("Who won the 2016 Formula 1 World Driver&#039;s Championship?", ['Lewis Hamilton', 'Max Verstappen', 'Kimi Raikkonen', 'Nico Rosberg'], "Nico Rosberg"),
new Question("In 2016, who won the Formula 1 World Constructor&#039;s Championship for the third time in a row?", ['Scuderia Ferrari', 'McLaren Honda', 'Red Bull Racing Renault', 'Mercedes-AMG Petronas'], "Mercedes-AMG Petronas"),
new Question("Which city did the former NHL team &quot;The Nordiques&quot; originiate from?", ['Houston', 'Montreal', 'New York', 'Quebec City'], "Quebec City"),
new Question("What team won the 2016 MLS Cup?", ['Colorado Rapids', 'Toronto FC', 'Montreal Impact', 'Seattle Sounders'], "Seattle Sounders"),
new Question("In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?", ['Ayrton Senna', 'Ronald Ratzenberger', 'Gilles Villeneuve', 'Jules Bianchi'], "Jules Bianchi"),
new Question("Which of the following Grand Slam tennis tournaments occurs LAST?", ['French Open', 'Wimbledon', 'Australian Open', 'US Open'], "US Open"),
new Question("What year did the New Orleans Saints win the Super Bowl?", ['2008', '2010', '2011', '2009'], "2009"),
new Question("What is the exact length of one non-curved part in Lane 1 of an Olympic Track?", ['100m', '100yd', '109.36yd', '84.39m'], "84.39m"),
new Question("This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.", ['Don McKellar', 'Don Taylor ', 'Donald Sutherland', 'Don Cherry'], "Don Cherry"),
new Question("Which team has won the most Stanley Cups in the NHL?", ['Chicago Blackhawks', 'Toronto Maple Leafs', 'Detroit Red Wings', 'Montreal Canadians'], "Montreal Canadians"),
new Question("Which portuguese island is soccer player Cristiano Ronaldo from?", ['Terceira', 'Santa Maria', 'Porto Santo', 'Madeira'], "Madeira"),
new Question("What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?", ['Cristiano Ronaldo los Santos Diego', 'Cristiano Armando Diego Ronaldo', 'Cristiano Luis Armando Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro'], "Cristiano Ronaldo dos Santos Aveiro"),
new Question("Who won the &quot;Champions League&quot; in 1999?", ['Barcelona', 'Bayern Munich', 'Liverpool', 'Manchester United'], "Manchester United"),
new Question("Which year was the third Super Bowl held?", ['1968', '1971', '1970', '1969'], "1969"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
