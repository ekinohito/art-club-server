const db = require('./db')
db.insertQuotes('LEXA U')
db.selectQuotes().then(
    result => console.log(result)
)

