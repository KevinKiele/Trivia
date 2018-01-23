import urllib.request
import json

# sport vragen
url = 'https://opentdb.com/api.php?amount=50&category=21'
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


x = 0
# De lijsten vullen met gegevens
while x<50:

    #voeg de vragen in een lijst
    vragen.append(cont['results'][x]["question"])

    # voeg de antwoorden in een lijst
    goed.append(cont["results"][x]["correct_answer"])
    fout.append(cont["results"][x]["incorrect_answers"])
    # counter
    x +=1

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
