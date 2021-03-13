const db = require('./db')
const fs = require('fs')
const path = require('path')


db.deleteQuotes()
fs.readFile(path.join(__dirname, '../data/quotes.json'),
    (err, data) => JSON.parse(data.toString()).forEach(item => db.insertQuotes(item)))
