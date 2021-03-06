module.exports = {
    createUsersSQL: `
        CREATE TABLE IF NOT EXISTS users
        (
            user_id INTEGER PRIMARY KEY,
            user_name TEXT NOT NULL UNIQUE,
            user_pwd_hash TEXT NOT NULL,
            user_role TEXT DEFAULT 'normal',
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `,
    deleteUsersSQL: `
        DELETE FROM users
    `,
    insertUsersSQL: `
        INSERT INTO users(user_name, user_pwd_hash, user_role) VALUES (?, ?, ?) 
    `,
    selectUsersSQL: `
        SELECT * FROM users ORDER BY timestamp DESC
    `,
    findUsersSQL: `
        SELECT * FROM users WHERE user_name = ?
    `
}
