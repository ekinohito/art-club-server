module.exports = {
    createResidentsSQL: `
        CREATE TABLE IF NOT EXISTS residents
        (
            resident_id INTEGER PRIMARY KEY,
            resident_name TEXT NOT NULL,
            resident_icon_name TEXT NOT NULL,
            resident_href TEXT
        )
    `,
    deleteResidentsSQL: `
        DELETE FROM residents
    `,
    insertResidentsSQL: `
        INSERT INTO residents(resident_name, resident_icon_name, resident_href) VALUES (?, ?, ?) 
    `,
    selectResidentsSQL: `
        SELECT * FROM residents
    `
}
