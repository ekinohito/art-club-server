import posters from "../../data/posters.json";

export default (req, res) => {
    switch (req.method){
        case "GET":
            res.status(200).json(posters);
            return;
    }
}