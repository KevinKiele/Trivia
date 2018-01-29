import urllib.request
import json
import random, copy

# alleen vragen met 4 antwoorden kunnen --> in mijn dict is het 4de antworode altijd de juiste, en dit wordt ook gelezen in application.py
#history
#1= algemeen, 2 = geschiedenis, 3 =
urllijst = ["https://opentdb.com/api.php?amount=50&category=9&type=multiple", 'https://opentdb.com/api.php?amount=50&category=23&type=multiple', 'https://opentdb.com/api.php?amount=50&category=21&type=multiple']

url = 'https://opentdb.com/api.php?amount=50&category=23&type=multiple'
req = urllib.request.Request(url)

# url lezen en decoden voor gebruik
r = urllib.request.urlopen(req).read()
cont = json.loads(r.decode('utf-8'))
counter = 0


# lijsten en dict aanmaken
Trivia_Algemeen = {}
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


# shuffle de vragen
shuffled_Trivia_Algemeen = []
def shuffle(questions):
    for key, value in questions.items():
        random.shuffle(value)
        shuffled_Trivia_Algemeen.append(value)
    return shuffled_Trivia_Algemeen

## Speel het spel als test
def run_test(questions):
    score = 0
    for q, a in questions.items():
        print(q, "\n", a, "\n")
        answer = input("Your answer: ")
        if answer == a[3]:
            score +=1
            print("Correct!\n")
        else:
            print("False!\n")
    print("You answered %s out of 50 correctly!" %(score))

#run_test(Trivia_Algemeen)


# print precies wat ik wil zodat ik het in java kan gebruiken
for q, v in Trivia_Algemeen.items():
    print('new Question("{}", {}, "{}"),'.format(q, v, v[3]))


