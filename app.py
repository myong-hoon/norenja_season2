from flask import Flask, render_template

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["UPLOAD_FOLDER"] = "./static/profile_pics"

@app.route("/")
def home():
    return render_template("Login02.html")

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
