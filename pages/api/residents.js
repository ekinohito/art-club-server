import residents from "../../data/residents.json";

export default (req, res) => {
    switch (req.method){
        case "GET":
            res.status(200).json(residents);
            return;
    }
}
