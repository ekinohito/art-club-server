import {checkAdmin} from "../../../utils/jwt";

const db = require('../../../db/db')

export default (req, res) => {
    switch (req.method){
        case "GET":
            db.selectPosters().then(result => res.status(200).json(result.map(
                poster => ({
                    id: poster.poster_id,
                    iconName: poster.poster_icon_name,
                    name: poster.poster_name,
                    date: poster.poster_date,
                    description: poster.poster_description
                }))))
            return;
        case "POST":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            db.insertPosters(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
        case "DELETE":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            db.deleteOnePosters(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}