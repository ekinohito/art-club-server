import {checkAdmin} from "../../../utils/jwt";

const db = require('../../../db/db')

export default (req, res) => {
    switch (req.method){
        case "GET":
            db.selectPreviews().then(result => res.status(200).json(result.map(
                preview => ({
                    id: preview.preview_id,
                    preview: preview.preview_preview,
                    text: preview.preview_text,
                    link: preview.preview_link
                }))))
            return;
        case "POST":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            db.insertPreviews(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
        case "DELETE":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            db.deleteOnePreviews(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}