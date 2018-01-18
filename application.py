from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from passlib.apps import custom_app_context as pwd_context
from tempfile import mkdtemp

from helpers import *

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
        return redirect(url_for("index"))

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

@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    return apology("TODO")

@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user."""

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

        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))

        if len(rows) == 1:
            return apology("Onjuiste gebruikersnaam")

        else:
            opgeslagen = db.execute("INSERT INTO users (username,hash) VALUES(:username, :hash)", username=request.form.get("username"),hash=pwd_context.hash(request.form.get("password")))

        session["user_id"] = opgeslagen

        # return naar login pagina
        return render_template("login.html")

    else:
        return render_template("register.html")


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    return apology("TODO")