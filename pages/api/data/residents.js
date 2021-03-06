import {checkAdmin} from "../../../utils/jwt";

const db = require('../../../db/db')

export default async (req, res) => {
    switch (req.method){
        case "GET":
            const result = await db.selectResidents()
            res.status(200).json(result.map(
                resident => ({
                    id: resident.resident_id,
                    iconName: resident.resident_icon_name,
                    name: resident.resident_name,
                    href: resident.resident_href
                })))
            return;
        case "POST":
            console.log(JSON.parse(req.body))
            if (!checkAdmin(req, res)) return
            await db.insertResidents(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
        case "DELETE":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            await db.deleteOneResidents(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}
