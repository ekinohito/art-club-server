const sqlite3 = require('sqlite3').verbose();
const quotes = require('./sql/quotes')
const partners = require('./sql/partners')
const previews = require('./sql/previews')
const residents = require('./sql/residents');
const posters = require('./sql/posters');
const users = require('./sql/users');

let db = new sqlite3.Database('./db.db');
db.run(quotes.createQuotesSQL)
db.run(partners.createPartnersSQL)
db.run(previews.createPreviewsSQL)
db.run(residents.createResidentsSQL)
db.run(posters.createPostersSQL)
db.run(users.createUsersSQL)

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

    deleteResidents: () => db.run(residents.deleteResidentsSQL),
    selectResidents: () => new Promise((resolve) =>
        db.all(residents.selectResidentsSQL, (err, rows) => {resolve(rows)})
    ),
    insertResidents: (resident) => db.run(residents.insertResidentsSQL, [resident.name, resident.iconName, resident.href]),

    deletePosters: () => db.run(posters.deletePostersSQL),
    selectPosters: () => new Promise((resolve) =>
        db.all(posters.selectPostersSQL, (err, rows) => {resolve(rows)})
    ),
    insertPosters: (poster) => db.run(posters.insertPostersSQL, [poster.name, poster.iconName, poster.date, poster.description]),

    deleteUsers: () => db.run(users.deleteUsersSQL),
    selectUsers: () => new Promise((resolve) =>
        db.all(users.selectUsersSQL, (err, rows) => {resolve(rows)})
    ),
    insertUsers: (user) => db.run(users.insertUsersSQL, [user.name, user.pwdHash, user.role]),
    findUsers: (name) => new Promise((resolve) =>
        db.get(users.findUsersSQL, [name], (err, row) => {resolve(row)})
    ),
}
