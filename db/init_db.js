const db = require('./db')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt');
require('dotenv').config({path: '.env.local'});

(async () => {
    await db.createQuotes();
    await db.createPartners();
    await db.createPreviews();
    await db.createResidents();
    await db.createPosters();
    await db.createUsers();
})().then(() => {
    db.deleteQuotes()
    fs.readFile(path.join(__dirname, '../data/quotes.json'),
        (err, data) => JSON.parse(data.toString()).forEach(item => db.insertQuotes(item)))

    db.deletePartners()
    fs.readFile(path.join(__dirname, '../data/partners.json'),
        (err, data) => JSON.parse(data.toString()).forEach(item => db.insertPartners(item)))

    db.deletePreviews()
    fs.readFile(path.join(__dirname, '../data/previews.json'),
        (err, data) => JSON.parse(data.toString()).forEach(item => db.insertPreviews(item)))

    db.deleteResidents()
    fs.readFile(path.join(__dirname, '../data/residents.json'),
        (err, data) => JSON.parse(data.toString()).forEach(item => db.insertResidents(item)))

    db.deletePosters()
    fs.readFile(path.join(__dirname, '../data/posters.json'),
        (err, data) => JSON.parse(data.toString()).forEach(item => db.insertPosters(item)))

    db.deleteUsers()
    bcrypt.hash(process.env.ADMIN_PASSWORD, +process.env.SALT_ROUNDS)
        .then((value) => db.insertUsers({name: 'admin', role: 'admin', pwdHash: value }))
})
