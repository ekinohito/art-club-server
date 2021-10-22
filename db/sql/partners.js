module.exports = {
    createPartnersSQL: `
        CREATE TABLE IF NOT EXISTS partners
        (
            partner_id INTEGER PRIMARY KEY,
            partner_title TEXT NOT NULL,
            partner_image TEXT NOT NULL,
            partner_link TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `,
    deletePartnersSQL: `
        DELETE FROM partners
    `,
    deleteOnePartnersSQL: `
        DELETE FROM partners WHERE partner_id = ?
    `,
    insertPartnersSQL: `
        INSERT INTO partners(partner_title, partner_image, partner_link) VALUES (?, ?, ?) 
    `,
    selectPartnersSQL: `
        SELECT * FROM partners ORDER BY timestamp DESC 
    `
}

