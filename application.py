from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from passlib.apps import custom_app_context as pwd_context
from tempfile import mkdtemp
import random, copy

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

# custom filter
app.jinja_env.filters["usd"] = usd

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

@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    return apology("TODO")

@app.route("/history")
@login_required
def history():
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
            return apology("Gebruikersnaam is een verplicht veld")

        # ensure password was submitted
        elif not request.form.get("password"):
            return apology("Wachtwoord is een verplicht veld")

        # query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))

        # ensure username exists and password is correct
        if len(rows) != 1 or not pwd_context.verify(request.form.get("password"), rows[0]["hash"]):
            return apology("Onjuiste gebruikersnaam en/of wachtwoord")

        # remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # redirect user to home page
        return redirect(url_for("game"))

    # else if user reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")



@app.route("/logout")
def logout():
    """Log user out."""

    # forget any user_id
    session.clear()

    # redirect user to login form
    return redirect(url_for("login"))

@app.route("/preloginhomepage", methods={"GET", "POST"})
def preloginhomepage():

    return render_template("preloginhomepage.html")

@app.route("/information", methods={"GET", "POST"})
def information():

    return render_template("information.html")

@app.route("/aboutus", methods={"GET", "POST"})
def aboutus():

    return render_template("aboutus.html")

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

        # TODO zorgen dat ingevulde gegevens overeenkomen met de gebruiker
        # TODO zorgen dat je niet wachtwoorden van andere users kan veranderen
        #rijen = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))
        #if len(rijen) != 1 or not pwd_context.verify(request.form.get("nieuwwachtwoord"), rijen[0]["hash"]):

        # session["user_id"] = rijen[0]["id"]
        #TODO verander wachtwoord in de database
        # verander_wachtwoord = db.execute("UPDATE users SET hash = :hash WHERE username =:username", username=request.form.get("username"), hash=pwd_context.hash(request.form.get("nieuwwachtwoord")))

        # return naar login pagina
        return redirect(url_for("wachtwoordveranderen"))

    else:
        return render_template("wachtwoordveranderen.html")


@app.route("/homepage", methods=["GET", "POST"])
@login_required
def homepage():
    """Homepagina."""
    # forget any user_id
    session.clear()

    # methode
    if request.method == "POST":

        return render_template("game.html")
    else:
        return render_template("homepage.html")

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
            return apology("Wachtwoord en/of gebruikersnaam onjuist")

        session["user_id"] = rijen[0]["id"]

        # return naar login pagina
        return redirect(url_for("index"))

    else:
        return render_template("register.html")



# Alles dat te maken heeft met de quize game zit hieronder

#Tijdelijke dataset
original_questions = {
 'Taj Mahal':['Agra','New Delhi','Mumbai','Chennai'],
 'Great Wall of China':['China','Beijing','Shanghai','Tianjin'],
 'Petra':['Ma\'an Governorate','Amman','Zarqa','Jerash'],
 'Machu Picchu':['Cuzco Region','Lima','Piura','Tacna'],
 'Egypt Pyramids':['Giza','Suez','Luxor','Tanta'],
 'Colosseum':['Rome','Milan','Bari','Bologna'],
 'Christ the Redeemer':['Rio de Janeiro','Natal','Olinda','Betim']
}

questions = copy.deepcopy(original_questions)

def shuffle(q):
    selected_keys = []
    i = 0
    while i < len(q):
        current_selection = random.choice(list(q.keys()))
        if current_selection not in selected_keys:
            selected_keys.append(current_selection)
            i = i+1
    return selected_keys



@app.route("/game", methods=["GET", "POST"])
@login_required
def game():
    questions_shuffled = shuffle(questions)
    for i in questions.keys():
        random.shuffle(questions[i])
        return render_template('game.html', q = questions_shuffled, o = questions)

@app.route("/answer", methods=["GET", "POST"])
@login_required
def game_answer():
    correct = 0
    for i in questions.keys():
        answered = request.form[i]
        if original_questions[i][0] == answered:
            correct = correct + 1
    return render_template("answer.html")




