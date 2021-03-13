const sqlite3 = require('sqlite3').verbose();

const createQuotesSQL = `
    CREATE TABLE IF NOT EXISTS quotes
    (
        quote_id INTEGER PRIMARY KEY,
        quote_text TEXT NOT NULL
    )
`

const deleteQuotesSQL = `
    DELETE FROM quotes
`

const insertQuotesSQL = `
    INSERT INTO quotes(quote_text) VALUES (?) 
`

const selectQuotesSQL = `
    SELECT * FROM quotes
`

const createPartnersSQL = `
    CREATE TABLE IF NOT EXISTS partners
    (
        partner_id INTEGER PRIMARY KEY,
        partner_title TEXT NOT NULL,
        partner_image TEXT NOT NULL,
        partner_link TEXT
    )
`

const deletePartnersSQL = `
    DELETE FROM partners
`

const insertPartnersSQL = `
    INSERT INTO partners(partner_title, partner_image, partner_link) VALUES (?, ?, ?) 
`

const selectPartnersSQL = `
    SELECT * FROM partners
`

let db = new sqlite3.Database('./db.db');
db.run(createQuotesSQL)
db.run(createPartnersSQL)

module.exports = {
    deleteQuotes: () => db.run(deleteQuotesSQL),
    selectQuotes: () => new Promise((resolve) =>
        db.all(selectQuotesSQL, (err, rows) => {resolve(rows)})
    ),
    insertQuotes: (quote) => db.run(insertQuotesSQL, [quote]),
    deletePartners: () => db.run(deletePartnersSQL),
    selectPartners: () => new Promise((resolve) =>
        db.all(selectPartnersSQL, (err, rows) => {resolve(rows)})
    ),
    insertPartners: (partner) => db.run(insertPartnersSQL, [partner.title, partner.image, partner.link])
}
