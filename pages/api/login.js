import jwt from 'jsonwebtoken';

export default (req, res) => {
    if (!req.body) {
        res.status(404);
        return
    }

    const {username, password} = req.body;

    if (username === 'admin' && password === 'admin')
        res.json({
            token: jwt.sign({
                username,
                role: 'admin'
            }, 'pazhilayaKwakazyabra')
        })

}