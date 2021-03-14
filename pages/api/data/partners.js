import {checkAdmin} from "../../../utils/jwt";

const db = require('../../../db/db')

export default (req, res) => {
    switch (req.method) {
        case "GET":
            db.selectPartners().then(result => res.status(200).json(result.map(
                partner => ({
                    id: partner.partner_id,
                    image: partner.partner_image,
                    title: partner.partner_title,
                    link: partner.partner_link
                }))))
            return;
        case "POST":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            db.insertPartners(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
        case "DELETE":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            db.deleteOnePartners(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}
