from flask import Flask, render_template

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "./static/profile_pics"

@app.route("/")
def head2er():
    return render_template("Main01.html")

@app.route("/header")
def header():
    return render_template("sidebar_header_flottingbtn.html")

@app.route("/login")
def login():
    return render_template("Login01.html")

@app.route("/login2")
def login2():
    return render_template("Login02.html")

@app.route("/join")
def join():
    return render_template("join.html")

@app.route("/test")
def test():
    return render_template("address.html")

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
