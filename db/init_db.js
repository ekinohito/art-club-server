const db = require('./db')
const fs = require('fs')
const path = require('path')


db.deleteQuotes()
fs.readFile(path.join(__dirname, '../data/quotes.json'),
    (err, data) => JSON.parse(data.toString()).forEach(item => db.insertQuotes(item)))

db.deletePartners()
fs.readFile(path.join(__dirname, '../data/partners.json'),
    (err, data) => JSON.parse(data.toString()).forEach(item => db.insertPartners(item)))

db.deletePreviews()
fs.readFile(path.join(__dirname, '../data/previews.json'),
    (err, data) => JSON.parse(data.toString()).forEach(item => db.insertPreviews(item)))
