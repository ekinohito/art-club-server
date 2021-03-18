import {checkAdmin} from "../../../utils/jwt";

const db = require('../../../db/db')

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            const result = await db.selectPreviews()
            res.status(200).json(result.map(
                preview => ({
                    id: preview.preview_id,
                    preview: preview.preview_preview,
                    text: preview.preview_text,
                    link: preview.preview_link
                })))
            return;
        case "POST":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            await db.insertPreviews(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
        case "DELETE":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            await db.deleteOnePreviews(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}