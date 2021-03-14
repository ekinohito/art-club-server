module.exports = {
    createQuotesSQL: `
        CREATE TABLE IF NOT EXISTS quotes
        (
            quote_id INTEGER PRIMARY KEY,
            quote_text TEXT NOT NULL
        )
    `,
    deleteQuotesSQL: `
        DELETE FROM quotes
    `,
    deleteOnePartnersSQL: `
        DELETE FROM quotes WHERE quote_id = ?
    `,
    insertQuotesSQL: `
        INSERT INTO quotes(quote_text) VALUES (?) 
    `,
    selectQuotesSQL: `
        SELECT * FROM quotes
    `
}
