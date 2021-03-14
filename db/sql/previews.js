module.exports = {
    createPreviewsSQL: `
        CREATE TABLE IF NOT EXISTS previews
        (
            preview_id INTEGER PRIMARY KEY,
            preview_text TEXT NOT NULL,
            preview_preview TEXT NOT NULL,
            preview_link TEXT
        )
    `,
    deletePreviewsSQL: `
        DELETE FROM previews
    `,
    deletePreviewsOneSQL: `
        DELETE FROM previews WHERE preview_id = ?
    `,
    insertPreviewsSQL: `
        INSERT INTO previews(preview_text, preview_preview, preview_link) VALUES (?, ?, ?) 
    `,
    selectPreviewsSQL: `
        SELECT * FROM previews
    `
}
