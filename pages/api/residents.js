const db = require('../../db/db')

export default (req, res) => {
    switch (req.method){
        case "GET":
            db.selectResidents().then(result => res.status(200).json(result.map(
                partner => ({
                    id: partner.resident_id,
                    iconName: partner.resident_icon_name,
                    name: partner.resident_name,
                    href: partner.resident_href
                }))))
            return;
        case "POST":
            console.log(JSON.parse(req.body))
            db.insertResidents(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}
