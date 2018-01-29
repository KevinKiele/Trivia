import urllib.request
import json

# alleen vragen met 4 antwoorden kunnen --> in mijn dict is het 4de antworode altijd de juiste, en dit wordt ook gelezen in application.py
#history
#1= algemeen, 2 = geschiedenis, 3 = sport
urllijst = ["https://opentdb.com/api.php?amount=50&category=9&type=multiple", 'https://opentdb.com/api.php?amount=50&category=23&type=multiple', 'https://opentdb.com/api.php?amount=50&category=21&type=multiple']

# 1 = algemeen
url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
req = urllib.request.Request(url)

# url lezen en decoden voor gebruik
r = urllib.request.urlopen(req).read()
cont = json.loads(r.decode('utf-8'))
counter = 0

# lijsten en dict aanmaken
Trivia_Sport = {}
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
    Trivia_Sport[vragen[counter]] = antwoorden[counter]
    counter += 1

# Uitleg waarom onderstaande code in hastag staat
# Deze code heb ik gebruikt om de api precies te printen zoals ik ze wil krijgen, dit lukte mij niet in een lijst te krijgen
# de output hiervan kopieer ik en gebruik ik dan in de geschikte app_catogorie(Algemeeen, Sport, Geschiedenis)

# gewilde format van vragen printen
#for q, v in Trivia_Sport.items():
 #   print('new Question("{}", {}, "{}"),'.format(q, v, v[3]))