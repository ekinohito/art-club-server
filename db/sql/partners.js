module.exports = {
    createPartnersSQL: `
        CREATE TABLE IF NOT EXISTS partners
        (
            partner_id INTEGER PRIMARY KEY,
            partner_title TEXT NOT NULL,
            partner_image TEXT NOT NULL,
            partner_link TEXT
        )
    `,
    deletePartnersSQL: `
        DELETE FROM partners
    `,
    insertPartnersSQL: `
        INSERT INTO partners(partner_title, partner_image, partner_link) VALUES (?, ?, ?) 
    `,
    selectPartnersSQL: `
        SELECT * FROM partners
    `
}

