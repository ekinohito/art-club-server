const db = require('../../../db/db')

export default (req, res) => {
    switch (req.method){
        case "GET":
            db.selectResidents().then(result => res.status(200).json(result.map(
                resident => ({
                    id: resident.resident_id,
                    iconName: resident.resident_icon_name,
                    name: resident.resident_name,
                    href: resident.resident_href
                }))))
            return;
        case "POST":
            console.log(JSON.parse(req.body))
            db.insertResidents(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}