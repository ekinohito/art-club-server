module.exports = {
    createUsersSQL: `
        CREATE TABLE IF NOT EXISTS users
        (
            user_id INTEGER PRIMARY KEY,
            user_name TEXT NOT NULL UNIQUE,
            user_pwd_hash TEXT NOT NULL,
            user_role TEXT DEFAULT 'normal'
        )
    `,
    deleteUsersSQL: `
        DELETE FROM users
    `,
    insertUsersSQL: `
        INSERT INTO users(user_name, user_pwd_hash, user_role) VALUES (?) 
    `,
    selectUsersSQL: `
        SELECT * FROM users
    `,
    findUsersSQL: `
        SELECT * FROM users WHERE user_name = ?
    `
}
