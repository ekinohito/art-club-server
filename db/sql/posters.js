module.exports = {
    createPostersSQL: `
        CREATE TABLE IF NOT EXISTS posters
        (
            poster_id INTEGER PRIMARY KEY,
            poster_name TEXT NOT NULL,
            poster_icon_name TEXT NOT NULL,
            poster_date TEXT,
            poster_description TEXT
        )
    `,
    deletePostersSQL: `
        DELETE FROM posters
    `,
    insertPostersSQL: `
        INSERT INTO posters(poster_name, poster_icon_name, poster_date, poster_description) VALUES (?, ?, ?, ?) 
    `,
    selectPostersSQL: `
        SELECT * FROM posters
    `
}
