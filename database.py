import urllib.request
import json

# alleen vragen met 4 antwoorden kunnen --> in mijn dict is het 4de antworode altijd de juiste, en dit wordt ook gelezen in application.py
url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
req = urllib.request.Request(url)

# url lezen en decoden voor gebruik
r = urllib.request.urlopen(req).read()
cont = json.loads(r.decode('utf-8'))
counter = 0

# lijsten en dict aanmaken
Trivia = {}
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
    Trivia[vragen[counter]] = antwoorden[counter]
    counter += 1

# test the game
