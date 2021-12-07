from flask import Flask


app = Flask(__name__)

@app.route("/todo")
def todo():
    return {}


@app.route("/todo/delete")
def deleteTodo():
    return {}

@app.route("/notes")
def notes(): 
    return {}

@app.route("/notes/delete")
def deleteNotes():
    return {}


if __name__ == "__main__":
    app.run(debug=True)