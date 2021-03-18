const sqlite3 = require('sqlite3').verbose();
const quotes = require('./sql/quotes')
const partners = require('./sql/partners')
const previews = require('./sql/previews')
const residents = require('./sql/residents');
const posters = require('./sql/posters');
const users = require('./sql/users');
const util = require("util");
const DEBUG = false;

let db = new sqlite3.Database('./db.db');
let closure =
    (method) =>
        (sql, order) =>
            (params) => {
                if (DEBUG) console.log(method, sql, order, params)
                return util.promisify((...args) =>
                    db[method](...args))(sql, (order)?order.map(value => params[value]):undefined)
            }

let run = closure("run")
let get = closure("get")
let all = closure("all")

module.exports = {
    createQuotes: run(quotes.createQuotesSQL),
    createPartners: run(partners.createPartnersSQL),
    createPreviews: run(previews.createPreviewsSQL),
    createResidents: run(residents.createResidentsSQL),
    createPosters: run(posters.createPostersSQL),
    createUsers: run(users.createUsersSQL),


    deleteQuotes: run(quotes.deleteQuotesSQL),
    deleteOneQuotes: run(quotes.deleteOnePartnersSQL, ['id']),
    selectQuotes: all(quotes.selectQuotesSQL),
    insertQuotes: run(quotes.insertQuotesSQL, ['text']),

    deletePartners: run(partners.deletePartnersSQL),
    deleteOnePartners: run(partners.deleteOnePartnersSQL, ['id']),
    selectPartners: all(partners.selectPartnersSQL),
    insertPartners: run(partners.insertPartnersSQL, ['title', 'image', 'link']),

    deletePreviews: run(previews.deletePreviewsSQL),
    deleteOnePreviews: run(previews.deletePreviewsOneSQL, ['id']),
    selectPreviews: all(previews.selectPreviewsSQL),
    insertPreviews: run(previews.insertPreviewsSQL, ['text', 'preview', 'link']),

    deleteResidents: run(residents.deleteResidentsSQL),
    deleteOneResidents: run(residents.deleteResidentsOneSQL, ['id']),
    selectResidents: all(residents.selectResidentsSQL),
    insertResidents: run(residents.insertResidentsSQL, ['name', 'iconName', 'href']),

    deletePosters: run(posters.deletePostersSQL),
    deleteOnePosters: run(posters.deletePostersOneSQL, ['id']),
    selectPosters: all(posters.selectPostersSQL),
    insertPosters: run(posters.insertPostersSQL, ['name', 'iconName', 'date', 'description']),

    deleteUsers: run(users.deleteUsersSQL),
    selectUsers: all(users.selectUsersSQL),
    insertUsers: run(users.insertUsersSQL, ['name', 'pwdHash', 'role']),
    findUsers: get(users.findUsersSQL, ['name']),
}
