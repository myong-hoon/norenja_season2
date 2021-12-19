from flask import Flask, render_template

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "./static/profile_pics"

@app.route("/")
def head2er():
    return render_template("main.html")

@app.route("/header")
def header():
    return render_template("sidebar_header_flottingbtn.html")

@app.route("/footer")
def footer():
    return render_template("footer.html")

@app.route("/login")
def login():
    return render_template("login01.html")

@app.route("/login2")
def login2():
    return render_template("login02.html")

@app.route("/join")
def join():
    return render_template("join.html")

@app.route("/location")
def location():
    return render_template("location.html")

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
