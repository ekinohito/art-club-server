import competence from "../../../data/competence.json";

export default (req, res) => {
    switch (req.method){
        case "GET":
            res.status(200).json(competence);
            return;
    }
}