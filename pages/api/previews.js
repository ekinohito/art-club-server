import previews from "../../data/previews.json";

export default (req, res) => {
    switch (req.method){
        case "GET":
            res.status(200).json(previews);
            return;
    }
}