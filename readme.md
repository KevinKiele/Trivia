## Naam applicatie: Locked Up


### Martin Kana, Vincent van Triest, Kevin Kiele


link voor screenshots : https://imgur.com/a/SyMrN
link voor productvideo: https://www.youtube.com/watch?v=snI45ClozIo&feature=youtu.be

## Features
#### De eerste feature van de app is het kunnen registreren van een account. Hierna kan er ingelogd worden en mogelijk ook het wachtwoord veranderd worden. Hierna kan de speler uit een aantal opties kiezen. Game selection brengt de speler naar een lobby waarna de speler uit drie categorieën kan kiezen. Hierna begint een Trivia spel bestaande uit 15 random vragen van de gekozen categorie. Aan het einde van dit spel ziet de speler hoeveel de speler goed heeft. De speler kan ook kiezen om te gaan naar ‘about us’ en ‘rules’ die meer inhoudelijk informatie geven over de website en het spel. Het spel is volledig in Java geschreven waardoor het spel snel verloopt en de website niet hoeft te laden om van vraag naar vraag te gaan. Er is een Multiplayer feature waar de speler kan zien of er iemand al in een categorie ziet en deze speler kan dan kiezen de lobby te joinen. De speler kan alleen nog niet zien wat er gebeurt met het spel van de tegenstander. De exacte categorieën zijn Sport, Algemeen en Geschiedenis.
#### Speciale opmerking: Voor elke categorie is een database die de api leest en herschrijft tot een dict. Hierna wordt een precieze line geprint met de vragen, antwoorden en juiste antwoord die hierna geplakt wordt in javascript en als eind database gebruikt wordt. Hiervoor was geen betere manier gevonden.


## Taakverdeling
#### Martin heeft de databases in python geschreven en de quiz in javascript met daarbij een deel van de css van de quiz zelf. Kevin heeft aan de website zelf gewerkt, de application.py geschreven en gewerkt aan de multiplayer functie. Vincent heeft gewerkt aan de css van de game en website, de routing van de website en aan het spelbord wat helaas niet in de uiteindelijke versie is gekomen. Uiteraard is er onderling ook gebouwd aan elkaars onderdelen.

## Tips voor de weg vinden in repository
#### Database, Database2, Database3 zijn python files waar in elk één api gelezen wordt en omgeschreven wordt. Dit wordt dan in app.Algemeen, app.Sport en app.Geschiedenis (java bestanden) gebruikt om de quiz te voorzien van vragen. In templates zitten alle html bestanden. In static zitten twee css bestanden, één voor de website en één voor de quiz. In static zitten 5 java bestanden, 2 algemene voor de quiz en 3 specifieke per categorie.