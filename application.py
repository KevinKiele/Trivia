from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from passlib.apps import custom_app_context as pwd_context
from tempfile import mkdtemp
import random, copy
import database
import database2
import database3

from helpers import *
#testcomment
# configure application
app = Flask(__name__)

# ensure responses aren't cached
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response


# configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# configure CS50 Library to use SQLite database
db = SQL("sqlite:///trivia.db")

@app.route("/")
@login_required
def index():

    return apology("TODO")

@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in."""

    # forget any user_id
    session.clear()

    # if user reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # ensure username was submitted
        if not request.form.get("username"):
            return apology("Username not entered")

        # ensure password was submitted
        elif not request.form.get("password"):
            return apology("Password not entered")

        # query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))

        # ensure username exists and password is correct
        if len(rows) != 1 or not pwd_context.verify(request.form.get("password"), rows[0]["hash"]):
            return apology("Wrong username/password")

        # remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # redirect user to home page
        return redirect(url_for("homepage"))

    # else if user reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out."""

    # forget any user_id
    session.clear()

    # redirect user to prelogin homepage
    return redirect(url_for("preloginhomepage"))

@app.route("/preloginhomepage", methods={"GET", "POST"})
def preloginhomepage():

    return render_template("preloginhomepage.html")

@app.route("/information", methods={"GET", "POST"})
def information():

    return render_template("information.html")

@app.route("/aboutus", methods={"GET", "POST"})
def aboutus():

    return render_template("aboutus.html")

@app.route("/removefromdatabase", methods=["GET", "POST"])
@login_required
def removefromdatabase():
    if request.method == "GET":
        db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        db.execute("DELETE FROM lobby1 WHERE id = :id", id=session["user_id"])
        return render_template("lobbyselection.html")
    else:
        return apologyy("Test")

@app.route("/removefromdatabase2", methods=["GET", "POST"])
@login_required
def removefromdatabase2():
    if request.method == "GET":
        db.execute("SELECT * FROM lobby2 WHERE id = :id", id=session["user_id"])
        db.execute("DELETE FROM lobby2 WHERE id = :id", id=session["user_id"])
        return render_template("lobbyselection.html")
    else:
        return apologyy("Test")

@app.route("/removefromdatabase3", methods=["GET", "POST"])
@login_required
def removefromdatabase3():
    if request.method == "GET":
        db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        db.execute("DELETE FROM lobby3 WHERE id = :id", id=session["user_id"])
        return render_template("lobbyselection.html")
    else:
        return apologyy("Test")

@app.route("/lobbyselection", methods=["GET", "POST"])
@login_required
def lobbyselection():
        return render_template("lobbyselection.html")

@app.route("/lobby1", methods=["GET", "POST"])
@login_required
def lobby1():
    # methode
    if request.method == "GET":
        # checkt of username al in database staat
        rows = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        if len(rows) == 1:
            return apology("Unable to Join")

        # zorgt voor maximaal aantal spelers
        max_players = db.execute("SELECT * FROM lobby1")
        if len(max_players) == 2:
            return apology("Lobby is Full")

        # puts players in sql // werkt niet
        join_lobby = db.execute("INSERT INTO lobby1 (id, lobbyname, ready) VALUES(:id, :lobbyname, :ready)", id=session["user_id"], lobbyname="lobby1", ready="no")
        return render_template("lobby1.html")

    else:
        return redirect(url_for("ready"))

@app.route("/lobby2", methods=["GET", "POST"])
@login_required
def lobby2():
    # methode
    if request.method == "GET":

        # checkt of username al in database staat
        rows = db.execute("SELECT * FROM lobby2 WHERE id = :id", id=session["user_id"])
        if len(rows) == 1:
            return apology("Unable to Join")

        # puts players in sql
        join_lobby = db.execute("INSERT INTO lobby2 (id, lobbyname) VALUES(:id, :lobbyname)", id=session["user_id"], lobbyname="lobby2")

        # zorgt voor maximaal aantal spelers
        max_players = db.execute("SELECT * FROM lobby2")
        if len(max_players) == 4:
            return apology("Lobby is Full")

        return render_template("lobby2.html")
    else:
        return render_template("lobby2.html")

@app.route("/lobby3", methods=["GET", "POST"])
@login_required
def lobby3():
    # methode
    if request.method == "GET":

        # checkt of username al in database staat
        rows = db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        if len(rows) == 1:
            return apology("Unable to Join")

        # puts players in sql // werkt niet
        join_lobby = db.execute("INSERT INTO lobby3 (id, lobbyname) VALUES(:id, :lobbyname)", id=session["user_id"], lobbyname="lobby3")

        # zorgt voor maximaal aantal spelers
        max_players = db.execute("SELECT * FROM lobby3")
        if len(max_players) == 8:
            return apology("Lobby is Full")

        return render_template("lobby3.html")
    else:
        return render_template("lobby3.html")


@app.route("/returnlobby1", methods=["GET", "POST"])
@login_required
def returnlobby1():

    if request.method == "GET":

        check = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        not_ready = db.execute("UPDATE lobby1 SET ready = :ready WHERE id = :id", ready="no", id=session["user_id"])
        return render_template("lobby1.html")
    else:
        return render_template("homepage")

@app.route("/returnlobby2", methods=["GET", "POST"])
@login_required
def returnlobby2():

    if request.method == "GET":

        check = db.execute("SELECT * FROM lobby2 WHERE id = :id", id=session["user_id"])
        not_ready = db.execute("UPDATE lobby2 SET ready = :ready WHERE id = :id", ready="no", id=session["user_id"])
        return render_template("lobby2.html")
    else:
        return render_template("homepage")

@app.route("/returnlobby3", methods=["GET", "POST"])
@login_required
def returnlobby3():

    if request.method == "GET":

        check = db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        not_ready = db.execute("UPDATE lobby3 SET ready = :ready WHERE id = :id", ready="no", id=session["user_id"])
        return render_template("lobby3.html")
    else:
        return render_template("homepage")


@app.route("/check", methods=["GET", "POST"])
@login_required
def check():
    if request.method =="GET":
        # kijkt of iedereen ready is
        everyone_ready = db.execute("SELECT * FROM lobby1 WHERE ready = :ready", ready="yes")
        if len(everyone_ready) == 2:
            return redirect(url_for("game"))

        else:
            return apology1("All players need to be ready to start the game")

@app.route("/check2", methods=["GET", "POST"])
@login_required
def check2():
    if request.method =="GET":
        # kijkt of iedereen ready is
        everyone_ready = db.execute("SELECT * FROM lobby2 WHERE ready = :ready", ready="yes")
        if len(everyone_ready) == 2:
            return redirect(url_for("game"))

        else:
            return apology1("All players need to be ready to start the game")

@app.route("/check3", methods=["GET", "POST"])
@login_required
def check3():
    if request.method =="GET":
        # kijkt of iedereen ready is
        everyone_ready = db.execute("SELECT * FROM lobby3 WHERE ready = :ready", ready="yes")
        if len(everyone_ready) == 2:
            return redirect(url_for("game"))

        else:
            return apology1("All players need to be ready to start the game")

@app.route("/ready", methods=["GET", "POST"])
@login_required
def ready():
    # methode
    if request.method == "GET":
        # zet ready van user op yes
        ready = db.execute("UPDATE lobby1 SET ready = :ready WHERE id = :id", ready="yes", id=session["user_id"])
        # checkt of alle values op yes staan
        everyone_ready = db.execute("SELECT * FROM lobby1 WHERE ready = :ready", ready="yes")
        # zorgt ervoor dat gecheckt wordt of iedereen ready is
        if len(everyone_ready) == 1:
            return render_template("ready.html")
    else:
        return apology("Test")


@app.route("/ready2", methods=["GET", "POST"])
@login_required
def ready2():
    # methode
    if request.method == "GET":
        # zet ready van user op yes
        ready = db.execute("UPDATE lobby2 SET ready = :ready WHERE id = :id", ready="yes", id=session["user_id"])
        # checkt of alle values op yes staan
        everyone_ready = db.execute("SELECT * FROM lobby2 WHERE ready = :ready", ready="yes")
        # zorgt ervoor dat gecheckt wordt of iedereen ready is
        if len(everyone_ready) == 1:
            return render_template("ready2.html")
    else:
        return apology("Test")

@app.route("/ready3", methods=["GET", "POST"])
@login_required
def ready3():
    # methode
    if request.method == "GET":
        # zet ready van user op yes
        ready = db.execute("UPDATE lobby3 SET ready = :ready WHERE id = :id", ready="yes", id=session["user_id"])
        # checkt of alle values op yes staan
        everyone_ready = db.execute("SELECT * FROM lobby3 WHERE ready = :ready", ready="yes")
        # zorgt ervoor dat gecheckt wordt of iedereen ready is
        if len(everyone_ready) == 1:
            return render_template("ready3.html")
    else:
        return apology("Test")


@app.route("/myprofile", methods=["GET", "POST"])
@login_required
def myprofile():
    return render_template("myprofile.html")

@app.route("/wachtwoordveranderen", methods=["GET", "POST"])
@login_required
def wachtwoordveranderen():

        # methode & pagina
    if request.method == "GET":
        return render_template("wachtwoordveranderen.html")

    if request.method == "POST":

        if not request.form.get("username"):
            return apology("Gebruikersnaam is een verplicht veld")

        elif not request.form.get("oudwachtwoord"):
            return apology("Oud wachtwoord is een verplicht veld")


        elif not request.form.get("nieuwwachtwoord"):
            return apology("Nieuw wachtwoord is een verplicht veld")

        elif not request.form.get("nieuwwachtwoordagain"):
            return apology("Herhaal wachtwoord is een verplicht veld.")

        # query database for username
        rijen = db.execute("SELECT * FROM users WHERE id = :id", id=session["user_id"])

        # juiste gebruikersnaam invullen // dit werkt blijkbaar maar 1 keer het is dus nodig om hierna uit te loggen en weer in te loggen
        if request.form.get("username") != rijen[0]["username"]:
            return apology("Gebruikersnaam is niet correct")

        # make sure old password matches
        elif not pwd_context.verify(request.form.get("oudwachtwoord"), rijen[0]["hash"]):
            return apology("Wachtwoord is niet correct")

        elif request.form.get("nieuwwachtwoord") != request.form.get("nieuwwachtwoordagain"):
            return apology("Nieuw wachtwoord en herhaling wachtwoord moeten overeenkomen")

        # change the password in the database
        rows = db.execute("UPDATE users SET hash = :hash WHERE id = :id", hash=pwd_context.hash(request.form.get("nieuwwachtwoord")), id=session["user_id"])

        return redirect(url_for("wachtwoordveranderd"))

    else:
        return render_template("wachtwoordveranderen.html")

@app.route("/homepage", methods=["GET", "POST"])
@login_required
def homepage():
    """Homepagina."""

    # methode
    if request.method == "POST":

        return render_template("homepage.html")
    else:
        return render_template("homepage.html")

@app.route("/wachtwoordveranderd", methods=["GET", "POST"])
@login_required
def wachtwoordveranderd():
    return render_template("wachtwoordveranderd.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user."""

    # forget any user_id
    session.clear()

    # methode
    if request.method == "POST":

        # checkt gebruikersnaam & wachtwoord & herhaling wachtwoord
        if not request.form.get("username"):
            return apology("Gebruikersnaam is een verplicht veld")

        elif not request.form.get("password"):
            return apology("Wachtwoord is een verplicht veld")

        # zorgt dat herhaling wachtwoord klopt
        elif not request.form.get("passwordagain"):
            return apology("Herhaal wachtwoord is een verplicht veld")

        # kijkt of ingevulde paswoorden gelijk zijn
        elif request.form.get("password") != request.form.get("passwordagain"):
            return apology("Wachtwoorden komen niet overeen")

        # TODO insert data into users database
        rijen = db.execute("INSERT INTO users (username, hash) VALUES(:username, :hash)", username=request.form.get("username"), hash=pwd_context.hash(request.form.get("password")))

        rijen = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))

        if len(rijen) != 1 or not pwd_context.verify(request.form.get("password"), rijen[0]["hash"]):
            return apology("Gebruikersnaam bestaat al")

        session["user_id"] = rijen[0]["id"]

        # return naar login pagina
        return redirect(url_for("homepage"))

    else:
        return render_template("register.html")


# Alles dat te maken heeft met de quize game zit hieronder

# De dataset importeren
original_questions = database.Trivia_Algemeen
questions = copy.deepcopy(original_questions)


# schuffle de vragen zodat het juiste antwoord niet altijd achterin staat
def shuffle(q):
    selected_keys = []
    i = 0
    while i < len(q):
        current_selection = random.choice(list(q.keys()))
        if current_selection not in selected_keys:
            selected_keys.append(current_selection)
            i += 1
    return selected_keys

#maak de quize aan op een pagina
@app.route("/game")
@login_required
def game():
    questions_shuffled = shuffle(questions)
    for i in questions.keys():
        random.shuffle(questions[i])
        return render_template('game.html', q = questions_shuffled, o = questions)


@app.route('/quiz', methods=['POST'])
def quiz_answers():
    correct = 0
    for i in questions.keys():
        answered = request.form[i]
    if original_questions[i][3] == answered:
        correct += 1
    return render_template("endscreen.html", q = score)

# waar het resultaat uiteindelijk komt
@app.route("/endscreen", methods=["GET", "POST"])
@login_required
def endscreen():
    return render_template("endscreen.html")

# de drie mogelijke quize pagina's hieronder
# Algemeen
@app.route("/Algemeen")
@login_required
def Algemeen():
    return render_template("Algemeen.html")

#geschiedenis
@app.route("/Geschiedenis")
@login_required
def Geschiedenis():
    return render_template("Geschiedenis.html")

#geschiedenis
@app.route("/Sport")
@login_required
def Sport():
    return render_template("Sport.html")


# spelbord gerelateerde codes hieronder

@app.route("/spelbordtest", methods=["GET", "POST"])
def spelbordtest():
    return render_template("spelbordtest.html")



