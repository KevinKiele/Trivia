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
    gameOverHTML += "<h2 id='score'> You answered " + quiz.score + " questions correctly! </h2>";
    gameOverHTML += "<h3 id='score'>Thanks for playing and well done! If you'd like to fire up a new game, click Game Selection in the Navigation bar.</h>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
// create questions
var questions = [
new Question("Which of the following sports is not part of the triathlon?", ['Cycling', 'Swimming', 'Running', 'Horse-Riding'], "Horse-Riding"),
new Question("At which bridge does the annual Oxford and Cambridge boat race start?", ['Putney', 'Battersea', 'Vauxhall ', 'Hammersmith'], "Putney"),
new Question("How many times did Martina Navratilova win the Wimbledon Singles Championship?", ['Ten', 'Seven', 'Eight', 'Nine'], "Nine"),
new Question("With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?", ['Ferrari', 'Benetton', 'Mercedes', 'Jordan'], "Jordan"),
new Question("What tool lends it&#039;s name to a last-stone advantage in an end in Curling?", ['Drill', 'Wrench', 'Screwdriver', 'Hammer'], "Hammer"),
new Question("What cricketing term denotes a batsman being dismissed with a score of zero?", ['Carry', 'Beamer', 'Duck', 'Bye'], "Duck"),
new Question("Which of these teams isn&#039;t a member of the NHL&#039;s &quot;Original Six&quot; era?", ['New York Rangers', 'Boston Bruins', 'Philadelphia Flyers', 'Toronto Maple Leafs'], "Philadelphia Flyers"),
new Question("Who was the British professional wrestler Shirley Crabtree better known as?", ['Kendo Nagasaki', 'Masambula', 'Giant Haystacks', 'Big Daddy'], "Big Daddy"),
new Question("What is the nickname of Northampton town&#039;s rugby union club?", ['Saints', 'Wasps', 'Saracens', 'Harlequins'], "Saints"),
new Question("How many soccer players should be on the field at the same time?", ['26', '20', '24', '22'], "22"),
new Question("Which team won the 2015-16 English Premier League?", ['Leicester City', 'Liverpool', 'Manchester United', 'Chelsea'], "Leicester City"),
new Question("A stimpmeter measures the speed of a ball over what surface?", ['Golf Putting Green', 'Cricket Outfield', 'Pinball Table', ' Football Pitch'], "Golf Putting Green"),
new Question("Which Formula One driver was nicknamed &#039;The Professor&#039;?", ['Alain Prost', 'Niki Lauda', 'Emerson Fittipaldi', 'Ayrton Senna'], "Alain Prost"),
new Question("How many scoring zones are there on a conventional dart board?", ['82', '42', '102', '62'], "82"),
new Question("In baseball, how many fouls are an out?", ['5', '0', '2', '3'], "0"),
new Question("Which nation hosted the FIFA World Cup in 2006?", ['United Kingdom', 'Germany', 'Brazil', 'South Africa'], "Germany"),
new Question("The F1 season of 1994 is remembered for what tragic event?", ['Death of Ayrton Senna (San Marino)', 'Verstappen on Fire (Germany)', 'Schumacher&#039;s Ban (Britain)', 'The Showdown (Australia)'], "Death of Ayrton Senna (San Marino)"),
new Question("What is the highest belt you can get in Taekwondo?", ['Black', 'Green', 'White', 'Red'], "Black"),
new Question("The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?", ['August 23', 'August 21', 'August 19', 'August 17'], "August 21"),
new Question("Which country will host the 2020 Summer Olympics?", ['China', 'Australia', 'Germany', 'Japan'], "Japan"),
new Question("Which country is hosting the 2018 FIFA World Cup?", ['Russia', 'United States', 'Germany', 'Saudi Arabia'], "Russia"),
new Question("Which country is hosting the 2022 FIFA World Cup?", ['Bolivia', 'Qatar', 'Vietnam', 'Uganda'], "Qatar"),
new Question("Which driver has been the Formula 1 world champion for a record 7 times?", ['Jim Clark', 'Fernando Alonso', 'Ayrton Senna', 'Michael Schumacher'], "Michael Schumacher"),
new Question("What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?", ['16 - 0', '7 - 1', '0 - 1', '3 - 4'], "7 - 1"),
new Question("Which team was the 2015-2016 NBA Champions?", ['Cleveland Cavaliers', 'Toronto Raptors', 'Golden State Warriors', 'Oklahoma City Thunders'], "Cleveland Cavaliers"),
new Question("Which team was the 2014-2015 NBA Champions?", ['Cleveland Cavaliers', 'Golden State Warriors', 'Atlanta Hawks', 'Houston Rockets'], "Golden State Warriors"),
new Question("Josh Mansour is part of what NRL team?", ['Sydney Roosters', 'Melbourne Storm', 'North Queensland Cowboys', 'Penrith Panthers'], "Penrith Panthers"),
new Question("Which car manufacturer won the 2016 24 Hours of Le Mans?", ['Toyota', 'Ferrari', 'Audi', 'Porsche'], "Porsche"),
new Question("Which car company is the only Japanese company which won the 24 Hours of Le Mans?", ['Subaru', 'Nissan', 'Mazda', 'Toyota'], "Mazda"),
new Question("Which female player won the gold medal of table tennis singles in 2016 Olympics Games?", ['Ai FUKUHARA (Japan)', 'Song KIM (North Korea)', 'DING Ning (China)', 'LI Xiaoxia (China)'], "DING Ning (China)"),
new Question("Which soccer team won the Copa Am&eacute;rica 2015 Championship ?", ['Argentina', 'Paraguay', 'Brazil', 'Chile'], "Chile"),
new Question("Which soccer team won the Copa Am&eacute;rica Centenario 2016?", ['Argentina', 'Brazil', 'Chile', 'Colombia'], "Chile"),
new Question("Which team won 2014 FIFA World Cup in Brazil?", ['Brazil', 'Argentina', 'Netherlands', 'Germany'], "Germany"),
new Question("What national team won the 2016 edition of UEFA European Championship?", ['Portugal', 'Germany', 'England', 'France'], "Portugal"),
new Question("In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?", ['3', '1', '2', '4'], "4"),
new Question("In 2016, who won the Formula 1 World Constructor&#039;s Championship for the third time in a row?", ['Mercedes-AMG Petronas', 'Red Bull Racing Renault', 'McLaren Honda', 'Scuderia Ferrari'], "Mercedes-AMG Petronas"),
new Question("What team won the 2016 MLS Cup?", ['Montreal Impact', 'Seattle Sounders', 'Toronto FC', 'Colorado Rapids'], "Seattle Sounders"),
new Question("What is the oldest team in the NFL?", ['Arizona Cardinals', 'Chicago Bears', 'New York Giants', 'Green Bay Packers'], "Arizona Cardinals"),
new Question("What is the oldest team in Major League Baseball?", ['Chicago Cubs', 'Cincinnati Reds', 'St. Louis Cardinals', 'Atlanta Braves'], "Atlanta Braves"),
new Question("In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?", ['Jules Bianchi', 'Ayrton Senna', 'Gilles Villeneuve', 'Ronald Ratzenberger'], "Jules Bianchi"),
new Question("Which of the following Grand Slam tennis tournaments occurs LAST?", ['US Open', 'Australian Open', 'French Open', 'Wimbledon'], "US Open"),
new Question("What year did the New Orleans Saints win the Super Bowl?", ['2008', '2009', '2010', '2011'], "2009"),
new Question("This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.", ['Don McKellar', 'Don Taylor ', 'Don Cherry', 'Donald Sutherland'], "Don Cherry"),
new Question("Which team has won the most Stanley Cups in the NHL?", ['Chicago Blackhawks', 'Detroit Red Wings', 'Montreal Canadians', 'Toronto Maple Leafs'], "Montreal Canadians"),
new Question("Which portuguese island is soccer player Cristiano Ronaldo from?", ['Terceira', 'Madeira', 'Porto Santo', 'Santa Maria'], "Madeira"),
new Question("What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?", ['Cristiano Armando Diego Ronaldo', 'Cristiano Luis Armando Ronaldo', 'Cristiano Ronaldo los Santos Diego', 'Cristiano Ronaldo dos Santos Aveiro'], "Cristiano Ronaldo dos Santos Aveiro"),
new Question("Who won the &quot;Champions League&quot; in 1999?", ['Liverpool', 'Bayern Munich', 'Manchester United', 'Barcelona'], "Manchester United"),
new Question("Who won the 2015 College Football Playoff (CFP) National Championship? ", ['Ohio State Buckeyes', 'Clemson Tigers', 'Alabama Crimson Tide', 'Wisconsin Badgers'], "Ohio State Buckeyes"),
new Question("What year was hockey legend Wayne Gretzky born?", ['1965', '1963', '1961', '1959'], "1961"),
new Question("Which year was the third Super Bowl held?", ['1969', '1970', '1971', '1968'], "1969"),
];

// kies 15 random vragen
var Questions = questions.splice(Math.floor(Math.random()*questions.length),15);

// create quiz
var quiz = new Quiz(Questions);

// display quiz
populate();
