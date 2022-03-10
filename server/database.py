from pymongo import MongoClient, results
import json

cluster = MongoClient("mongodb+srv://Masonbrad831:hoohm099@cluster0.88jsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["Capstone"]
todo = db["Todo"]
notes = db["Notes"]
calendar = db["Calendar"]


def InsertTodo(post):
    todo.insert_one(post)


def FindAllTodo():
    results = todo.find()
    todoList = []
    for x in results:
        todoList.append(x)
    return todoList

def DeleteFromTodo(input):
    results = todo.delete_one({"todo":input})

def InsertNotes(post):
    notes.insert_one(post)

def FindAllNotes():
    noteList = []
    for x in notes.find():
        noteList.append(x)
    return noteList
    

def DeleteFromNotes(input):
    results = notes.delete_one({"note" : input})

def FindAllCalendar():
    results = calendar.find()
    calendarList = []
    for x in results:
        calendarList.append(x)
    return calendarList

def DeleteFromCalandar(input):
    results = calendar.delete_one({"reminder": input})
    
def InsertCalendar(post):
    calendar.insert_one(post)