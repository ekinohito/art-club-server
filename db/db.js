const sqlite3 = require('sqlite3').verbose();
const quotes = require('./sql/quotes')
const partners = require('./sql/partners')
const previews = require('./sql/previews')

let db = new sqlite3.Database('./db.db');
db.run(quotes.createQuotesSQL)
db.run(partners.createPartnersSQL)
db.run(previews.createPreviewsSQL)

module.exports = {
    deleteQuotes: () => db.run(quotes.deleteQuotesSQL),
    selectQuotes: () => new Promise((resolve) =>
        db.all(quotes.selectQuotesSQL, (err, rows) => {resolve(rows)})
    ),
    insertQuotes: (quote) => db.run(quotes.insertQuotesSQL, [quote]),

    deletePartners: () => db.run(partners.deletePartnersSQL),
    selectPartners: () => new Promise((resolve) =>
        db.all(partners.selectPartnersSQL, (err, rows) => {resolve(rows)})
    ),
    insertPartners: (partner) => db.run(partners.insertPartnersSQL, [partner.title, partner.image, partner.link]),

    deletePreviews: () => db.run(previews.deletePreviewsSQL),
    selectPreviews: () => new Promise((resolve) =>
        db.all(previews.selectPreviewsSQL, (err, rows) => {resolve(rows)})
    ),
    insertPreviews: (preview) => db.run(previews.insertPreviewsSQL, [preview.text, preview.preview, preview.link]),
}
