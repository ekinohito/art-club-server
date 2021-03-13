import jwt from 'jsonwebtoken';

export default (req, res) => {
    const token = jwt.verify(req.body, 'pazhilayaKwakazyabra', (err, data) => {
        if (err) {
            res.status(401);
            return;
        }

        res.status(200).json(data)
    })
}
