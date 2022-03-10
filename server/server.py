import re
from bson import json_util
from flask import Flask, json, jsonify
import database
import json
from bson.json_util import loads, dumps


app = Flask(__name__)


def parseJson(data):
    return json.loads(json_util.dumps(data))


@app.route("/notes")
def getNotes():
    data = database.FindAllNotes()
    parsed = parseJson(data)
    return jsonify(parsed)

@app.route("/notes/<string:note>")
def deleteNote(note):
    database.DeleteFromNotes(note)

@app.route('/todo')
def getTodo():
    data = database.FindAllTodo()
    parsed = parseJson(data)
    return jsonify(parsed)

@app.route('/todo/<string:todo>')
def deleteTodo(todo):
    database.DeleteFromTodo(todo)

@app.route('/calendar')
def getCalendar():
    data = database.FindAllCalendar()
    parsed = parseJson(data)
    return jsonify(parsed)

@app.route('/calendar/<string:reminder>')
def deleteCalendar(reminder):
    database.DeleteFromCalandar(reminder)

# @app.route("/notes")
# def getNotes():
#     return {"notes": [ {"notename" : "name", "note" : "test"}]}

if __name__ == '__main__':
    app.run(debug=True)