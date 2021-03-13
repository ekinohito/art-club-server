const db = require('../../db/db')

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
            console.log(req)
            res.status(200).json()
            return;
    }
}
