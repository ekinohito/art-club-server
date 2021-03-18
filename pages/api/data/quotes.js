import {checkAdmin} from "../../../utils/jwt";

const db = require('../../../db/db')

export default async (req, res) => {
    switch (req.method){
        case "GET":
            const result = await db.selectQuotes()
            res.status(200).json(result.map(
                quote => ({
                    id: quote.quote_id,
                    text: quote.quote_text
                })))
            return;
        case "POST":
            if (!checkAdmin(req, res)) return
            await db.insertQuotes(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
        case "DELETE":
            if (!checkAdmin(req, res)) return
            console.log(JSON.parse(req.body))
            await db.deleteOneQuotes(JSON.parse(req.body))
            res.status(200).json({"success": true})
            return;
    }
}
