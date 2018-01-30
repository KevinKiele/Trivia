import urllib.request
import json
import random, copy
from random import shuffle

# alleen vragen met 4 antwoorden kunnen --> in mijn dict is het 4de antworode altijd de juiste, en dit wordt ook gelezen in application.py
#history
#1= algemeen, 2 = geschiedenis, 3 =
urllijst = ["https://opentdb.com/api.php?amount=50&category=9&type=multiple", 'https://opentdb.com/api.php?amount=50&category=23&type=multiple', 'https://opentdb.com/api.php?amount=50&category=21&type=multiple']

url = 'https://opentdb.com/api.php?amount=50&category=9&type=multiple'
req = urllib.request.Request(url)

# url lezen en decoden voor gebruik
r = urllib.request.urlopen(req).read()
cont = json.loads(r.decode('utf-8'))
counter = 0


# lijsten en dict aanmaken
Trivia_Algemeen = {}
Trivia_Algemeen_shuffle = {}
goed = []
fout = []
antwoorden = []
vragen = []


counter = 0
# De lijsten vullen met gegevens
while counter<50:

    #voeg de vragen in een lijst
    vragen.append(cont['results'][counter]["question"])

    # voeg de antwoorden in een lijst
    goed.append(cont["results"][counter]["correct_answer"])
    fout.append(cont["results"][counter]["incorrect_answers"])
    # counter
    counter +=1

# voeg goed en fout samen voor alle mogelijke antwoorden lijst
antwoorden = fout
counter = 0
while counter <50:
    antwoorden[counter].append(goed[counter])
    counter += 1

# create dict with questions and answers
counter = 0
while counter <50:
    Trivia_Algemeen[vragen[counter]] = antwoorden[counter]
    counter += 1

# shuffle de antwoorden in een aparte lijst
antwoorden_shuffle = copy.deepcopy(antwoorden)

for antwoord in antwoorden_shuffle:
    random.shuffle(antwoord)

# maak een dict aan met de geshuffelde vragen:
counter = 0
while counter <50:
    Trivia_Algemeen_shuffle[vragen[counter]] = antwoorden_shuffle[counter]
    counter += 1


# Uitleg waarom onderstaande code in hastag staat
# Ik had geen manier gevonden op uit mijn database file gegevens te halen in java, mijn oplossing hiervoor is letterlijk printen uit
# de database de vragen, geshuffelde antwoorden en het juiste antwoord meegeven
# de output hiervan kopieer ik en gebruik ik dan in de geschikte app_catogorie(Algemeeen, Sport, Geschiedenis)

# gewilde format van vragen printen
#for q, v in Trivia_Algemeen.items():
 #   v2 = Trivia_Algemeen_shuffle[q]
  #  print('new Question("{}", {}, "{}"),'.format(q, v2, v[3]))