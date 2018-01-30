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
new Question("Which one of these was not a beach landing site in the Invasion of Normandy?", ['Gold', 'Juno', 'Sword', 'Silver'], "Silver"),
new Question("During what war did the &quot;Cuban Missile Crisis&quot; occur?", ['World War I', 'World War II', 'Revolutionary War', 'Cold War'], "Cold War"),
new Question("In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?", ['Joseph and Catherine', 'William and Elizabeth', 'George and Anne', 'John and Mary'], "John and Mary"),
new Question("Which king was killed at the Battle of Bosworth Field in 1485? ", ['Edward V', 'Henry VII', 'James I', 'Richard III'], "Richard III"),
new Question(" What Russian automatic gas-operated assault rifle was developed in the Soviet Union in 1947, and is still popularly used today?", ['RPK', 'M16', 'MG 42', 'AK-47'], "AK-47"),
new Question("What historical event was Tchaikovsky&#039;s 1812 Overture referencing?", ['The American War of 1812', 'The Russian Revolution', 'The Charge of the Light Brigade (Crimean War)', 'The Napoleonic Wars'], "The Napoleonic Wars"),
new Question("America&#039;s Strategic Defense System during the Cold War was nicknamed after this famous movie.", ['Jaws', 'Blade Runner', 'Alien', 'Star Wars'], "Star Wars"),
new Question("What number does the Roman numeral &quot;D&quot; stand for?", ['100', '1000', '50', '500'], "500"),
new Question("The idea of Socialism was articulated and advanced by whom?", ['Vladimir Lenin', 'Joseph Stalin', 'Vladimir Putin', 'Karl Marx'], "Karl Marx"),
new Question("During WWII, in 1945, the United States dropped atomic bombs on the two Japanese cities of Hiroshima and what other city?", ['Kawasaki', 'Tokyo', 'Kagoshima', 'Nagasaki'], "Nagasaki"),
new Question("Which of his six wives was Henry VIII married to the longest?", ['Anne Boleyn', 'Jane Seymour', 'Catherine Parr', 'Catherine of Aragon'], "Catherine of Aragon"),
new Question("When did Spanish Peninsular War start?", ['1806', '1810', '1809', '1808'], "1808"),
new Question("Which country had an &quot;Orange Revolution&quot; between 2004 and 2005?", ['Belarus', 'Latvia', 'Lithuania', 'Ukraine'], "Ukraine"),
new Question("When did Jamaica recieve its independence from England? ", ['1492', '1963', '1987', '1962'], "1962"),
new Question("Which of the following is NOT classified as a Semetic language?", ['Maltese', 'Akkadian', 'Mandaic', 'Sumerian'], "Sumerian"),
new Question("Which of the following was NOT a capital of Assyria:", ['A&scaron;&scaron;ur', 'Kalhu', 'Nineveh', 'Harran'], "Harran"),
new Question("All of the following are names of the Seven Warring States EXCEPT:", ['Zhao (趙)', 'Qin (秦)', 'Qi (齊)', 'Zhai (翟)'], "Zhai (翟)"),
new Question("In what year was the last natural case of smallpox documented?", ['1982', '1980', '1990', '1977'], "1977"),
new Question("Which of the following ancient peoples was NOT classified as Hellenic (Greek)?", ['Dorians', 'Achaeans', 'Ionians', 'Illyrians'], "Illyrians"),
new Question("List the following Iranic empires in chronological order:", ['Median, Achaemenid, Sassanid, Parthian', 'Achaemenid, Median, Parthian, Sassanid', 'Achaemenid, Median, Sassanid, Parthian', 'Median, Achaemenid, Parthian, Sassanid'], "Median, Achaemenid, Parthian, Sassanid"),
new Question("What was Manfred von Richthofen&#039;s nickname?", ['The High Flying Ace', 'The Blue Serpent ', 'The Germany Gunner', 'The Red Baron'], "The Red Baron"),
new Question("On which day did the attempted coup d&#039;etat of 1991 in the Soviet Union begin?", ['August 21', 'December 26', 'December 24', 'August 19'], "August 19"),
new Question("Which of these countries was NOT a part of the Soviet Union?", ['Turkmenistan', 'Kazakhstan', 'Uzbekistan', 'Afghanistan'], "Afghanistan"),
new Question("In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?", ['Peru', 'Brazil', 'Argentina', 'Chile'], "Chile"),
new Question("When did Canada leave the confederation to become their own nation?", ['July 1st, 1763', 'July 1st, 1832', 'July 1st, 1902', 'July 1st, 1867'], "July 1st, 1867"),
new Question("When was the SS or Schutzstaffel established?", ['September 1st, 1941', 'March 8th, 1935', 'February 21st, 1926', 'April 4th, 1925'], "April 4th, 1925"),
new Question("When did the Battle of the Somme begin?", ['August 1st, 1916', 'July 2nd, 1916', 'June 30th, 1916', 'July 1st, 1916'], "July 1st, 1916"),
new Question("In what year did the North American Video Game Crash occur?", ['1982', '1993', '1970', '1983'], "1983"),
new Question("Bohdan Khmelnytsky was which of the following?", ['General Secretary of the Communist Party of the USSR', 'Prince of Wallachia', 'Grand Prince of Novgorod', 'Leader of the Ukrainian Cossacks'], "Leader of the Ukrainian Cossacks"),
new Question("How many sonatas did Ludwig van Beethoven write?", ['50', '31', '21', '32'], "32"),
new Question("What year were the Marian Reforms instituted in the Roman Republic?", ['42 BCE', '264 BCE', '102 CE', '107 BCE'], "107 BCE"),
new Question("Who tutored Alexander the Great?", ['Socrates', 'Plato', 'King Philip', 'Aristotle'], "Aristotle"),
new Question("Joseph Stalin had a criminal past doing what?", ['Pedophilia', 'Tax evation', 'Identity Fraud', 'Robbing trains'], "Robbing trains"),
new Question("What year did the Boxing Day earthquake &amp; tsunami occur in the Indian Ocean?", ['2006', '2008', '2002', '2004'], "2004"),
new Question("What nationality was sultan Saladin?", ['Arab', 'Egyptian', 'Syrian', 'Kurdish'], "Kurdish"),
new Question("What was Napoleon Bonaparte&#039;s name before he changed it?", ['Naapolion van Bonijpaart', 'Napole&atilde;o do Boaparte', 'Napoleona de Buenoparte', 'Napoleone di Buonaparte'], "Napoleone di Buonaparte"),
new Question("What was the first sport to have been played on the moon?", ['Football', 'Tennis', 'Soccer', 'Golf'], "Golf"),
new Question("Which building was set aflame on August 24th, 1812?", ['Parliament Building', 'Grand National Assembly Building', 'Palace of the Nation', 'The White House'], "The White House"),
new Question("What is the mnemonic device for remembering the fates of the wives of Henry VIII?", ['Beheaded, Died, Divorced, Divorced, Beheaded, Survived', 'Died, Beheaded, Divorced, Beheaded, Survived, Divorced', 'Survived, Beheaded, Died, Divorced, Divorced, Beheaded', 'Divorced, Beheaded, Died, Divorced, Beheaded, Survived'], "Divorced, Beheaded, Died, Divorced, Beheaded, Survived"),
new Question("The Battle of Hastings was fought in which year?", ['911', '1204', '1420', '1066'], "1066"),
new Question("Which historical conflict killed the most people?", ['Taiping Rebellion', 'Three Kingdoms War', 'Mongol conquests', 'World War II'], "World War II"),
new Question("Who was the first president born in the independent United States?", ['John Adams', 'George Washington', 'James Monroe ', 'Martin Van Buren'], "Martin Van Buren"),
new Question("When was the city of Rome, Italy founded?", ['902 BCE', '524 BCE', '697 BCE', '753 BCE'], "753 BCE"),
new Question("The Fallingwater House, located in Pennsylvania, was designed by which architect?", ['Antoni Gaudi', 'Frank Gehry', 'Le Corbusier', 'Frank Lloyd Wright'], "Frank Lloyd Wright"),
new Question("Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?", ['The MGM Grand', 'The Sands', 'The Sahara', 'The Flamingo'], "The Flamingo"),
new Question("What year did Australia become a federation?", ['1910', '1899', '1911', '1901'], "1901"),
new Question("Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?", ['Pope John Paul II', 'Bang-Ding Ow', 'Albert Putin', 'The Polish President'], "The Polish President"),
new Question("The United States Army Air Corps became the United States Air Force on what date?", ['December 14, 1946', 'October 27, 1945', 'November 08, 1944', 'September 18, 1947'], "September 18, 1947"),
new Question("How long did the Warsaw Uprising during World War II last?", ['20 Days', '55 Days', '224 Days', '63 Days'], "63 Days"),
new Question("What was the original name of New York City?", ['New London', 'New Paris', 'New Rome', 'New Amsterdam'], "New Amsterdam")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
