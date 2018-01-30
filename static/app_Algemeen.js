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
new Question("According to the BBPA, what is the most common pub name in the UK?", ['Royal Oak', 'King&#039;s Head', 'White Hart', 'Red Lion'], "Red Lion"),
new Question("This field is sometimes known as &ldquo;The Dismal Science.&rdquo;", ['Economics', 'Politics', 'Physics', 'Philosophy'], "Economics"),
new Question("In a standard set of playing cards, which is the only king without a moustache?", ['Hearts', 'Spades', 'Diamonds', 'Clubs'], "Hearts"),
new Question("What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?", ['The Bushwhackers', 'Demolition', 'The British Bulldogs', 'The Dream Team'], "Demolition"),
new Question("What is the first book of the Old Testament?", ['Numbers', 'Leviticus', 'Exodus', 'Genesis'], "Genesis"),
new Question("What is the defining characteristic of someone who is described as hirsute?", ['Funny', 'Hairy', 'Rude', 'Tall'], "Hairy"),
new Question("In past times, what would a gentleman keep in his fob pocket?", ['Money', 'Watch', 'Keys', 'Notebook'], "Watch"),
new Question("A doctor with a PhD is a doctor of what?", ['Psychology', 'Philosophy', 'Phrenology', 'Physical Therapy'], "Philosophy"),
new Question("Which sign of the zodiac is represented by the Crab?", ['Virgo', 'Cancer', 'Libra', 'Sagittarius'], "Cancer"),
new Question("What alcoholic drink is made from molasses?", ['Gin', 'Vodka', 'Rum', 'Whisky'], "Rum"),
new Question("Which American president appears on a one dollar bill?", ['Thomas Jefferson', 'George Washington', 'Benjamin Franklin', 'Abraham Lincoln'], "George Washington"),
new Question("What geometric shape is generally used for stop signs?", ['Triangle', 'Hexagon', 'Circle', 'Octagon'], "Octagon"),
new Question("What is the name of the Jewish New Year?", ['Succoss', 'New Year', 'Rosh Hashanah', 'Elul'], "Rosh Hashanah"),
new Question("What is a &quot;dakimakura&quot;?", ['A Chinese meal, essentially composed of fish', 'A word used to describe two people who truly love each other', 'A body pillow', 'A yoga posture'], "A body pillow"),
new Question("What is the name of the very first video uploaded to YouTube?", ['carrie rides a truck', 'Me at the zoo', 'Her new puppy from great grandpa vern.', 'tribute'], "Me at the zoo"),
new Question("How many colors are there in a rainbow?", ['7', '8', '10', '9'], "7"),
new Question("Which film star has his statue in Leicester Square?", ['Alfred Hitchcock', 'Rowan Atkinson ', 'Charlie Chaplin', 'Paul Newman'], "Charlie Chaplin"),
new Question("Which of the following chemicals are found in eggplant seeds?", ['Nicotine', 'Cyanide', 'Psilocybin', 'Mescaline'], "Nicotine"),
new Question("What alcoholic drink is mainly made from juniper berries?", ['Vodka', 'Gin', 'Rum', 'Tequila'], "Gin"),
new Question("Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?", ['Ferrari', 'Fiat', 'Alfa Romeo', 'Maserati'], "Fiat"),
new Question("Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?", ['Shiatsu', 'Ukiyo', 'Ikigai', 'Majime'], "Shiatsu"),
new Question("What is on display in the Madame Tussaud&#039;s museum in London?", ['Wax sculptures', 'Designer clothing', 'Unreleased film reels', 'Vintage cars'], "Wax sculptures"),
new Question("What is the German word for &quot;spoon&quot;?", ['Messer', 'Gabel', 'L&ouml;ffel', 'Essst&auml;bchen'], "L&ouml;ffel"),
new Question("What is the French word for &quot;hat&quot;?", [' &Eacute;charpe', 'Chapeau', ' Casque', 'Bonnet'], "Chapeau"),
new Question("What is the romanized Japanese word for &quot;university&quot;?", ['Shokudou', 'Daigaku', 'Toshokan', 'Jimusho'], "Daigaku"),
new Question("What is the romanized Korean word for &quot;heart&quot;?", ['Simjang', 'Jeongsin', 'Aejeong', 'Segseu'], "Simjang"),
new Question("The Swedish word &quot;Grunka&quot; means what in English?", ['People', 'Pineapple', 'Place', 'Thing'], "Thing"),
new Question("The term &quot;scientist&quot; was coined in which year?", ['1833', '1933', '1942', '1796'], "1833"),
new Question("Which of the following languages does NOT use gender as a part of its grammar?", ['German', 'Polish', 'Turkish', 'Danish'], "Turkish"),
new Question("The new One World Trade Center in Manhattan, New York City was designed by which architect? ", ['Fumihiko Maki', 'Bjarke Ingels', 'Michael Arad', 'David Childs'], "David Childs"),
new Question("Which one of these Swedish companies was founded in 1943?", ['IKEA', 'Lindex', 'H &amp; M', 'Clas Ohlson'], "IKEA"),
new Question("Which of the following carbonated soft drinks were introduced first?", ['Dr. Pepper', 'Sprite', 'Mountain Dew', 'Coca-Cola'], "Dr. Pepper"),
new Question("What is the name of Poland in Polish?", ['Pupcia', 'P&oacute;land', 'Polszka', 'Polska'], "Polska"),
new Question("How many calories are in a 355 ml can of Pepsi Cola?", ['155', '200', '100', '150'], "150"),
new Question("The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;", ['Digest', 'Print', 'Read', 'Look'], "Print"),
new Question("What year was Apple Inc. founded?", ['1980', '1976', '1978', '1974'], "1976"),
new Question("Which of the General Mills Corporation&#039;s monster cereals was the last to be released in the 1970&#039;s?", ['Franken Berry', 'Count Chocula', 'Fruit Brute', 'Boo-Berry'], "Fruit Brute"),
new Question("Which restaurant&#039;s mascot is a clown?", ['Burger King', 'McDonald&#039;s', 'Sonic', 'Whataburger'], "McDonald&#039;s"),
new Question("What is the Portuguese word for &quot;Brazil&quot;?", ['Bras&iacute;l', 'Brasilia', 'Brasil', 'Brazil'], "Brasil"),
new Question("According to Fair Works Australia, how long do you have to work to get Long Service Leave?", ['7 years', '8 years', '2 years', '6 months'], "7 years"),
new Question("Which of the following card games revolves around numbers and basic math?", ['Uno', 'Twister', 'Go Fish', 'Munchkin'], "Uno"),
new Question("Where does water from Poland Spring water bottles come from?", ['Bavaria, Poland', 'Hesse, Germany', 'Maine, United States', 'Masovia, Poland'], "Maine, United States"),
new Question("What does the Latin phrase &quot;Veni, vidi, vici&quot; translate into English?", ['Past, present, and future', 'Life, liberty, and happiness', 'I came, I saw, I conquered', 'See no evil, hear no evil, speak no evil'], "I came, I saw, I conquered"),
new Question("When did the website &quot;Facebook&quot; launch?", ['2005', '2006', '2004', '2003'], "2004"),
new Question("Apple co-founder Steve Jobs died from complications of which form of cancer?", ['Bone', 'Pancreatic', 'Liver', 'Stomach'], "Pancreatic"),
new Question("Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?", ['Hewlett-Packard', 'Dell', 'Asus', 'Toshiba'], "Hewlett-Packard"),
new Question("Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?", ['Making People Happy Through Food', 'Why Pay More!?', 'We Love to See You Smile', 'Have It Your Way'], "We Love to See You Smile"),
new Question("In flight systems, what does the initialism &quot;TCAS&quot; stand for?", ['Traffic Call-sign Abbreviation System', 'Traffic Configuration Alignment System', 'Traffic Collision Avoidance System', 'Traffic Communication Alert System'], "Traffic Collision Avoidance System"),
new Question("Earl Grey tea is black tea flavoured with what?", ['Bergamot oil', 'Honey', 'Lavender', 'Vanilla'], "Bergamot oil"),
new Question("The website &quot;Shut Up &amp; Sit Down&quot; reviews which form of media?", ['Television Shows', 'Board Games', 'Video Games', 'Films'], "Board Games"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
