const db = require('./db')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt');
const util = require("util");


const readFile = util.promisify(fs.readFile);
async function initializeTable(create, clear, insert, filename) {
    await create()
    await clear()
    if (!filename) return;
    const file = await readFile(path.join(__dirname, filename))
    const json = JSON.parse(file.toString())
    await Promise.all(json.map(item => insert(item)))
}

(async () => {
    await Promise.all([
        initializeTable(db.createQuotes, db.deleteQuotes, db.insertQuotes, '../data/quotes.json'),
        initializeTable(db.createPartners, db.deletePartners, db.insertPartners, '../data/partners.json'),
        initializeTable(db.createPreviews, db.deletePreviews, db.insertPreviews, '../data/previews.json'),
        initializeTable(db.createResidents, db.deleteResidents, db.insertResidents, '../data/residents.json'),
        initializeTable(db.createPosters, db.deletePosters, db.insertPosters, '../data/posters.json'),
        initializeTable(db.createUsers, db.deleteUsers, db.insertUsers),
        bcrypt.hash(process.env.ADMIN_PASSWORD, +process.env.SALT_ROUNDS)
            .then((value) => db.insertUsers({name: 'admin', role: 'admin', pwdHash: value}))
    ])
})()

