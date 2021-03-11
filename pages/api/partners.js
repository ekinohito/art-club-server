import partners from "../../data/partners.json";

export default (req, res) => {
    switch (req.method){
        case "GET":
            res.status(200).json(partners);
            return;
    }
}
