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
new Question("Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?", ['Marvin Gaye - Sexual Healing', 'Coldplay - Midnight', 'a-ha - Take On Me', 'Ed Sheeran - I See Fire'], "Ed Sheeran - I See Fire"),
new Question("Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ", ['Alan Sugar', 'Donald Trump', 'Bill Gates', 'Richard Branson'], "Richard Branson"),
new Question("According to the BBPA, what is the most common pub name in the UK?", ['Royal Oak', 'White Hart', 'King&#039;s Head', 'Red Lion'], "Red Lion"),
new Question("What is the world&#039;s most expensive spice by weight?", ['Cinnamon', 'Cardamom', 'Vanilla', 'Saffron'], "Saffron"),
new Question("This field is sometimes known as &ldquo;The Dismal Science.&rdquo;", ['Philosophy', 'Politics', 'Physics', 'Economics'], "Economics"),
new Question("In a standard set of playing cards, which is the only king without a moustache?", ['Spades', 'Diamonds', 'Clubs', 'Hearts'], "Hearts"),
new Question("Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?", ['Moldova', 'Czech Republic', 'Denmark', 'Wales'], "Wales"),
new Question("Which company did Valve cooperate with in the creation of the Vive?", ['Oculus', 'Google', 'Razer', 'HTC'], "HTC"),
new Question("Which river flows through the Scottish city of Glasgow?", ['Tay', 'Dee', 'Tweed', 'Clyde'], "Clyde"),
new Question("What is the first book of the Old Testament?", ['Exodus', 'Leviticus', 'Numbers', 'Genesis'], "Genesis"),
new Question("In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?", ['Sword', 'Pen', 'Cellphone', 'Key'], "Key"),
new Question("Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?", ['Transformers', 'Care Bears', 'Rubik&rsquo;s Cube', 'Cabbage Patch Kids'], "Cabbage Patch Kids"),
new Question("What does a funambulist walk on?", ['Broken Glass', 'Balls', 'The Moon', 'A Tight Rope'], "A Tight Rope"),
new Question("How would one say goodbye in Spanish?", [' Hola', 'Au Revoir', 'Salir', 'Adi&oacute;s'], "Adi&oacute;s"),
new Question("Which sign of the zodiac is represented by the Crab?", ['Libra', 'Virgo', 'Sagittarius', 'Cancer'], "Cancer"),
new Question("What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ", ['Single', 'Secure', 'Solid', 'Subscriber'], "Subscriber"),
new Question("What alcoholic drink is made from molasses?", ['Gin', 'Vodka', 'Whisky', 'Rum'], "Rum"),
new Question("Which American president appears on a one dollar bill?", ['Thomas Jefferson', 'Abraham Lincoln', 'Benjamin Franklin', 'George Washington'], "George Washington"),
new Question("Which language is NOT Indo-European?", ['Russian', 'Greek', 'Latvian', 'Hungarian'], "Hungarian"),
new Question("The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?", ['Papua New Guinea', 'Ethiopia', 'China', 'India'], "India"),
new Question("What is the name of the Jewish New Year?", ['Elul', 'New Year', 'Succoss', 'Rosh Hashanah'], "Rosh Hashanah"),
new Question("When was &quot;YouTube&quot; founded?", ['May 22, 2004', 'September 12, 2005', 'July 19, 2009', 'February 14, 2005'], "February 14, 2005"),
new Question("Which one of the following rhythm games was made by Harmonix?", ['Meat Beat Mania', 'Guitar Hero Live', 'Dance Dance Revolution', 'Rock Band'], "Rock Band"),
new Question("What is a &quot;dakimakura&quot;?", ['A Chinese meal, essentially composed of fish', 'A yoga posture', 'A word used to describe two people who truly love each other', 'A body pillow'], "A body pillow"),
new Question("What is the name of the very first video uploaded to YouTube?", ['tribute', 'carrie rides a truck', 'Her new puppy from great grandpa vern.', 'Me at the zoo'], "Me at the zoo"),
new Question("What year was Queen Elizabeth II born?", ['1923', '1929', '1930', '1926'], "1926"),
new Question("Which of the following chemicals are found in eggplant seeds?", ['Mescaline', 'Cyanide', 'Psilocybin', 'Nicotine'], "Nicotine"),
new Question("Who is a co-founder of music streaming service Spotify?", ['Sean Parker', 'Felix Miller', 'Michael Breidenbruecker', 'Daniel Ek'], "Daniel Ek"),
new Question("Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?", ['Taipei 101', 'One Detroit Center', 'Westendstrasse 1', 'Niagara Mohawk Building'], "Niagara Mohawk Building"),
new Question("Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?", ['Ukiyo', 'Majime', 'Ikigai', 'Shiatsu'], "Shiatsu"),
new Question("What is on display in the Madame Tussaud&#039;s museum in London?", ['Designer clothing', 'Unreleased film reels', 'Vintage cars', 'Wax sculptures'], "Wax sculptures"),
new Question("Which of these colours is NOT featured in the logo for Google?", ['Yellow', 'Blue', 'Green', 'Pink'], "Pink"),
new Question("What is the Swedish word for &quot;window&quot;?", ['H&aring;l', 'Sk&auml;rm', 'Ruta', 'F&ouml;nster'], "F&ouml;nster"),
new Question("What is the romanized Korean word for &quot;heart&quot;?", ['Aejeong', 'Jeongsin', 'Segseu', 'Simjang'], "Simjang"),
new Question("What is the Italian word for &quot;tomato&quot;?", ['Aglio', 'Cipolla', 'Peperoncino', 'Pomodoro'], "Pomodoro"),
new Question("Which musician has collaborated with American producer Porter Robinson and released the 2016 song &quot;Shelter&quot;?", ['Mat Zo', 'deadmau5', 'Zedd', 'Madeon'], "Madeon"),
new Question("Five dollars is worth how many nickles?", ['50', '25', '69', '100'], "100"),
new Question("What character was once considered to be the 27th letter of the alphabet?", ['Interrobang', 'Tilde', 'Pilcrow', 'Ampersand'], "Ampersand"),
new Question("The new One World Trade Center in Manhattan, New York City was designed by which architect? ", ['Bjarke Ingels', 'Michael Arad', 'Fumihiko Maki', 'David Childs'], "David Childs"),
new Question("When was Hubba Bubba first introduced?", ['1984', '1972', '1980', '1979'], "1979"),
new Question("Which restaurant&#039;s mascot is a clown?", ['Whataburger', 'Burger King', 'Sonic', 'McDonald&#039;s'], "McDonald&#039;s"),
new Question("What was Mountain Dew&#039;s original slogan?", ['Give Me A Dew', 'Do The Dew', 'Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew', 'Yahoo! Mountain Dew... It&#039;ll tickle your innards!'], "Yahoo! Mountain Dew... It&#039;ll tickle your innards!"),
new Question("Which iconic Disneyland attraction was closed in 2017 to be remodeled as a &quot;Guardians of the Galaxy&quot; themed ride?", ['The Haunted Mansion', 'Pirates of the Caribbean', 'Peter Pan&#039;s Flight', 'Twilight Zone Tower of Terror'], "Twilight Zone Tower of Terror"),
new Question("What was the first ever London Underground line to be built?", ['Circle Line', 'Bakerloo Line', 'Victoria Line', 'Metropolitan Line'], "Metropolitan Line"),
new Question("What year was the RoboSapien toy robot released?", ['2000', '2001', '2006', '2004'], "2004"),
new Question("What is the Portuguese word for &quot;Brazil&quot;?", ['Brazil', 'Brasilia', 'Bras&iacute;l', 'Brasil'], "Brasil"),
new Question("Who invented Pastafarianism?", ['Eric Tignor', 'Bill Nye', 'Zach Soldi', 'Bobby Henderson'], "Bobby Henderson"),
new Question("Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?", ['Why Pay More!?', 'Have It Your Way', 'Making People Happy Through Food', 'We Love to See You Smile'], "We Love to See You Smile"),
new Question("What is real haggis made of?", ['Sheep&#039;s Heart, Kidneys and Lungs', 'Sheep&#039;s Liver, Kidneys and Eyes', 'Whole Sheep', 'Sheep&#039;s Heart, Liver and Lungs'], "Sheep&#039;s Heart, Liver and Lungs"),
new Question("Where did the pineapple plant originate?", ['Hawaii', 'Europe', 'Asia', 'South America'], "South America"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
