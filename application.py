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
    # voorkomt error na afsluiten en opnieuw opstarten na login // weet verder niet hoe je dit oplost
    return render_template("preloginhomepage.html")

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

    db.execute("DELETE FROM lobby1 WHERE id = :id", id=session["user_id"])
    db.execute("DELETE FROM lobby2 WHERE id = :id", id=session["user_id"])
    db.execute("DELETE FROM lobby3 WHERE id = :id", id=session["user_id"])
    # forget any user_id
    session.clear()


    # redirect user to prelogin homepage
    return redirect(url_for("preloginhomepage"))

@app.route("/preloginhomepage", methods={"GET", "POST"})
def preloginhomepage():
    return render_template("preloginhomepage.html")

@app.route("/leaderboard", methods={"GET", "POST"})
def leaderboard():
    # namen
    player_names = db.execute("SELECT username FROM users")

    for player_name in player_names:
        naam = player_name["username"]

    # scores
    player_scores = db.execute("SELECT points FROM users")
    points = 0


    # player_score = db.execute("SELECT score FROM users WHERE id = :id", id=session["user_id"])

    # for player_name in player_names:
    #     naam = player_name["username"]
    #     score = player_name["score"]


    return render_template("leaderboard.html", namen=player_names)

@app.route("/information", methods={"GET", "POST"})
def information():

    return render_template("information.html")

@app.route("/aboutus", methods={"GET", "POST"})
def aboutus():

    return render_template("aboutus.html")


@app.route("/lobbyselection", methods=["GET", "POST"])
@login_required
def lobbyselection():
    amount_players = db.execute("SELECT * FROM lobby1")
    amount_players = len(amount_players)
    amount_players2 = db.execute("SELECT * FROM lobby2")
    amount_players2 = len(amount_players2)
    amount_players3 = db.execute("SELECT * FROM lobby3")
    amount_players3 = len(amount_players3)
    return render_template("lobbyselection.html", variable=amount_players, variable2=amount_players2, variable3=amount_players3)

@app.route("/singleplayer", methods=["GET", "POST"])
@login_required
def singleplayer():
        return render_template("singleplayer.html")

@app.route("/whitehousesolo", methods=["GET", "POST"])
@login_required
def whitehousesolo():
        return render_template("whitehousesolo.html")

@app.route("/fenwayparksolo", methods=["GET", "POST"])
@login_required
def fenwayparksolo():
        return render_template("fenwayparksolo.html")

@app.route("/museumsolo", methods=["GET", "POST"])
@login_required
def museumsolo():
        return render_template("museumsolo.html")

@app.route("/solo1", methods=["GET", "POST"])
@login_required
def solo1():
        return render_template("Algemeen.html")

@app.route("/solo2", methods=["GET", "POST"])
@login_required
def solo2():
        return render_template("Sport.html")

@app.route("/solo3", methods=["GET", "POST"])
@login_required
def solo3():
        return render_template("Geschiedenis.html")

@app.route("/lobby1", methods=["GET", "POST"])
@login_required
def lobby1():
    # methode
    if request.method == "GET":
        # checkt of username al in database staat
        rows = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        if len(rows) == 1:
            return apology("Unable to Join")

        # checkt of player al in andere lobbys zit
        andere_lobby = db.execute("SELECT * FROM lobby2 WHERE id = :id", id=session["user_id"])
        if len(andere_lobby) == 1:
            return apology("You can't join two lobbys at the same time")
        andere_lobby2 = db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        if len(andere_lobby2) == 1:
            return apology("You can't join two lobbys at the same time")

        # puts players in sql
        join_lobby = db.execute("INSERT INTO lobby1 (id, category, ready, leave) VALUES(:id, :category, :ready, :leave)", id=session["user_id"], category="General", ready="yes", leave="no")

        # zorgt voor maximaal aantal spelers
        max_players = db.execute("SELECT * FROM lobby1")
        if len(max_players) == 2:
            # db.execute("DELETE FROM lobby1")
            return render_template("ready.html")


        return render_template("ready.html")

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

        # checkt of player al in andere lobbys zit
        andere_lobby = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        if len(andere_lobby) == 1:
            return apology("You can't join two lobbys at the same time")
        andere_lobby2 = db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        if len(andere_lobby2) == 1:
            return apology("You can't join two lobbys at the same time")

        # puts players in sql
        join_lobby = db.execute("INSERT INTO lobby2 (id, category, ready, leave) VALUES(:id, :category, :ready, :leave)", id=session["user_id"], category="Sport", ready="yes", leave="no")

        # zorgt voor maximaal aantal spelers
        max_players = db.execute("SELECT * FROM lobby2")
        if len(max_players) == 2:
            # db.execute("DELETE FROM lobby2")
            return render_template("ready.html")

        return render_template("ready2.html")

    else:
        return redirect(url_for("ready2"))

@app.route("/lobby3", methods=["GET", "POST"])
@login_required
def lobby3():
    # methode
    if request.method == "GET":

        # checkt of username al in database staat
        rows = db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        if len(rows) == 1:
            return apology("Unable to Join")

        # checkt of player al in andere lobbys zit
        andere_lobby = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        if len(andere_lobby) == 1:
            return apology("You can't join two lobbys at the same time")
        andere_lobby2 = db.execute("SELECT * FROM lobby2 WHERE id = :id", id=session["user_id"])
        if len(andere_lobby2) == 1:
            return apology("You can't join two lobbys at the same time")

        # puts players in sql // werkt niet
        join_lobby = db.execute("INSERT INTO lobby3 (id, category, ready, leave) VALUES(:id,  :category, :ready, :leave)", id=session["user_id"], category="History", ready="yes", leave="no")

        # zorgt voor maximaal aantal spelers
        max_players = db.execute("SELECT * FROM lobby3")
        if len(max_players) == 2:
            return render_template("ready.html")

        return render_template("ready3.html")

    else:
        return redirect(url_for("ready3"))

@app.route("/returnlobby", methods=["GET", "POST"])
@login_required
def returnlobby():

    if request.method == "GET":

        # kijkt max aantal players voor lobby1
        lobby1 = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        lobby2 = db.execute("SELECT * FROM lobby2 WHERE id = :id", id=session["user_id"])
        lobby3 = db.execute("SELECT * FROM lobby3 WHERE id = :id", id=session["user_id"])
        if len(lobby1) == 1:
            db.execute("DELETE FROM lobby1 WHERE id = :id", id=session["user_id"])
            return redirect(url_for("lobbyselection"))

        elif len(lobby2) == 1:
            db.execute("DELETE FROM lobby2 WHERE id = :id", id=session["user_id"])
            return redirect(url_for("lobbyselection"))

        elif len(lobby3) == 1:
            db.execute("DELETE FROM lobby3 WHERE id = :id", id=session["user_id"])
            return redirect(url_for("lobbyselection"))
        # check = db.execute("SELECT * FROM lobby1 WHERE id = :id", id=session["user_id"])
        # not_ready = db.execute("UPDATE lobby1 SET ready = :ready WHERE id = :id", ready="no", id=session["user_id"])
    else:
        return render_template("homepage")


@app.route("/check", methods=["GET", "POST"])
@login_required
def check():
    if request.method =="GET":
        # kijkt of iedereen ready is
        lobby1 = db.execute("SELECT * FROM lobby1 WHERE ready = :ready", ready="yes")
        lobby2 = db.execute("SELECT * FROM lobby2 WHERE ready = :ready", ready="yes")
        lobby3 = db.execute("SELECT * FROM lobby3 WHERE ready = :ready", ready="yes")
        # max amount of games at the same time = 3.
        if len(lobby1) == 2 or len(lobby1) == 4 or len(lobby1) == 6:
            db.execute("UPDATE lobby1 SET leave = :leave WHERE id = :id", leave="yes", id=session["user_id"])
            return render_template("Algemeen.html")

        elif len(lobby2) == 2 or len(lobby2) == 4 or len(lobby2) == 6:
            db.execute("UPDATE lobby2 SET leave = :leave WHERE id = :id", leave="yes", id=session["user_id"])
            return render_template("Sport.html")

        elif len(lobby3) == 2 or len(lobby3) == 4 or len(lobby3) == 6:
            db.execute("UPDATE lobby3 SET leave = :leave WHERE id = :id", leave="yes", id=session["user_id"])
            return render_template("Geschiedenis.html")

        else:
            return apology1("Please wait for one more person to join the lobby")


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


# de drie mogelijke quiz pagina's hieronder
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


