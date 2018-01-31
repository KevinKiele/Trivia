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
new Question("When did the French Revolution begin?", ['1799', '1789', '1823', '1756'], "1789"),
new Question("What was William Frederick Cody better known as?", ['Pawnee Bill', 'Wild Bill Hickok', 'Billy the Kid', 'Buffalo Bill'], "Buffalo Bill"),
new Question("Which king was killed at the Battle of Bosworth Field in 1485? ", ['Richard III', 'Edward V', 'Henry VII', 'James I'], "Richard III"),
new Question("Joseph Smith was the founder of what religion?", ['Hinduism', 'Buddhism', 'Mormonism', 'Christianity'], "Mormonism"),
new Question("America&#039;s Strategic Defense System during the Cold War was nicknamed after this famous movie.", ['Star Wars', 'Blade Runner', 'Alien', 'Jaws'], "Star Wars"),
new Question("Spain was formed in 1469 with the marriage of Isabella I of Castile and Ferdinand II of what other Iberian kingdom?", ['Navarre', 'Galicia', 'Aragon', 'Le&oacute;n'], "Aragon"),
new Question("What was the name of the spy ring that helped the United States win the Revolutionary War?", ['Unnamed', 'Culper Ring', 'New York Spy Ring', 'Washington&#039;s Spies'], "Culper Ring"),
new Question("The Battle of the Somme in World War I took place in which country?", ['Austria', 'France', 'Germany', 'Italy'], "France"),
new Question("When did Jamaica recieve its independence from England? ", ['1962', '1492', '1963', '1987'], "1962"),
new Question("Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?", ['Babylonians', 'Assyrians', 'Elamites', 'Hittites'], "Assyrians"),
new Question("Which of the following is NOT classified as a Semetic language?", ['Mandaic', 'Sumerian', 'Maltese', 'Akkadian'], "Sumerian"),
new Question("The Herero genocide was perpetrated in Africa by which of the following colonial nations?", ['France', 'Britain', 'Germany', 'Belgium'], "Germany"),
new Question("The original Roman alphabet lacked the following letters EXCEPT:", ['W', 'X', 'U', 'J'], "X"),
new Question("Which of these countries remained neutral during World War II?", ['Switzerland', 'France', 'United Kingdom', 'Italy'], "Switzerland"),
new Question("The collapse of the Soviet Union took place in which year?", ['1990', '1992', '1991', '1891'], "1991"),
new Question("When was the United States National Security Agency established?", ['November 4, 1952', 'July 26, 1908', ' July 1, 1973', ' November 25, 2002'], "November 4, 1952"),
new Question("On which day did ARPANET suffer a 4 hour long network crash?", ['October 27, 1980', 'November 21, 1969', 'October 29, 1969', 'December 9, 1991'], "October 27, 1980"),
new Question("On which day did the attempted coup d&#039;etat of 1991 in the Soviet Union begin?", ['December 24', 'December 26', 'August 21', 'August 19'], "August 19"),
new Question("What did the first vending machines in the early 1880&#039;s dispense?", ['Alcohol', 'Sodas ', 'Post cards', 'Cigarettes'], "Post cards"),
new Question("In which year did the First World War begin?", ['1930', '1939', '1914', '1917'], "1914"),
new Question("In what year did the North American Video Game Crash occur?", ['1970', '1983', '1982', '1993'], "1983"),
new Question("Bohdan Khmelnytsky was which of the following?", ['Grand Prince of Novgorod', 'Prince of Wallachia', 'Leader of the Ukrainian Cossacks', 'General Secretary of the Communist Party of the USSR'], "Leader of the Ukrainian Cossacks"),
new Question("Which one of these rulers did not belong to the Habsburg dynasty?", ['Philip V', 'Francis Joseph', 'Philip II', 'Charles V'], "Philip V"),
new Question("What year were the Marian Reforms instituted in the Roman Republic?", ['102 CE', '42 BCE', '107 BCE', '264 BCE'], "107 BCE"),
new Question("What year did the Boxing Day earthquake &amp; tsunami occur in the Indian Ocean?", ['2004', '2002', '2008', '2006'], "2004"),
new Question("In which year did the Tokyo Subway Sarin Attack occur?", ['2011', '1995', '1991', '2001'], "1995"),
new Question("What nationality was sultan Saladin?", ['Egyptian', 'Kurdish', 'Syrian', 'Arab'], "Kurdish"),
new Question("Who invented the &quot;Flying Shuttle&quot; in 1738; one of the key developments in the industrialization of weaving?", ['Richard Arkwright', 'John Kay', 'James Hargreaves', 'John Deere'], "John Kay"),
new Question("Which WWII tank ace is credited with having destroyed the most tanks?", ['Michael Wittmann', 'Walter Kniep', 'Otto Carius', 'Kurt Knispel'], "Kurt Knispel"),
new Question("What year was the United States Declaration of Independence signed?", ['1776', '1777', '1775', '1774'], "1776"),
new Question("During the Spanish Civil War (1936), Francisco Franco fought for which political faction?", ['Papal State', 'Popular Front', 'Nationalist Spain', 'Republican Spain'], "Nationalist Spain"),
new Question("Which American civilization is the source of the belief that the world would end or drastically change on December 21st, 2012?", ['The Aztecs', 'The Navajos', 'The Incas', 'The Mayans'], "The Mayans"),
new Question("When did Norway get its constitution?", ['1905', '1854', '1814', '1932'], "1814"),
new Question("When did Norway become free from Sweden?", ['1905', '1814', '1925', '1834'], "1905"),
new Question("How was Socrates executed?", ['Decapitation', 'Poison', 'Crucifixion ', 'Firing squad'], "Poison"),
new Question("What was the bloodiest single-day battle during the American Civil War?", ['The Battle of Antietam', 'The Battle of Gettysburg', 'The Siege of Vicksburg', 'The Battles of Chancellorsville'], "The Battle of Antietam"),
new Question("Who was the President of the United States during the signing of the Gadsden Purchase?", ['Franklin Pierce', 'James Polk', 'Andrew Johnson', 'Abraham Lincoln'], "Franklin Pierce"),
new Question("In what year did the First World War end?", ['1916', '1914', '1912', '1918'], "1918"),
new Question("How many women joined the United States Armed Services during World War II?", ['100,000', '500,000', '350,000', '225,000'], "350,000"),
new Question("In 1939, Britain and France declared war on Germany after it invaded which country?", ['Czechoslovakia', 'Poland', 'Austria', 'Hungary'], "Poland"),
new Question("Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?", ['The MGM Grand', 'The Sands', 'The Flamingo', 'The Sahara'], "The Flamingo"),
new Question("What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?", ['St James&#039;s Palace', 'Coughton Court', 'Hampton Court', 'Buckingham Palace'], "Hampton Court"),
new Question("What year did Australia become a federation?", ['1899', '1910', '1901', '1911'], "1901"),
new Question("In which year was Constantinople conquered by the Turks?", ['1453', '1454', '1440', '1435'], "1453"),
new Question("In what year did Kentucky become the 15th state to join the union?", ['1792', '1788', '1782', '1798'], "1792"),
new Question("Which country was an allied power in World War II?", ['Japan', 'Soviet Union', 'Germany', 'Italy'], "Soviet Union"),
new Question("Which of the following was not one of Joseph Stalin&#039;s ten blows during World War II?", ['Vistula-Oder Offensive', 'Crimean Offensive', 'Leningrad-Novgorod Offensive', 'Operation Bagration'], "Vistula-Oder Offensive"),
new Question("The minigun was designed in 1960 by which manufacturer.", ['General Electric', 'Heckler &amp; Koch', 'Colt Firearms', 'Sig Sauer'], "General Electric"),
new Question("Which country gifted the Statue of Liberty to the United States of America?", ['Germany', 'England', 'France', 'Spain'], "France"),
new Question("On which aircraft carrier did the Doolitte Raid launch from on April 18, 1942 during World War II?", ['USS Saratoga', 'USS Enterprise', 'USS Lexington', 'USS Hornet'], "USS Hornet"),

// kies 15 random vragen
var Questions = questions.splice(Math.floor(Math.random()*questions.length),15);

// create quiz
var quiz = new Quiz(Questions);

// display quiz
populate();
