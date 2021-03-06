import quotes from "../../data/quotes.json";

export default (req, res) => {
    switch (req.method){
        case "GET":
            res.status(200).json(quotes);
            return;
    }
}
