import jwt from 'jsonwebtoken';
import Cookies from "cookies";

export default (req, res) => {
    if (!req.body || req.method !== "POST") {
        res.status(404).json({success: false});
        return
    }

    console.log(req.body)
    const {username, password} = JSON.parse(req.body);
    console.log(username)

    if (username === 'admin' && password === 'admin') {
        const cookies = new Cookies(req, res)
        cookies.set('token', jwt.sign({
            username,
            role: 'admin'
        }, 'pazhilayaKwakazyabra'))
        res.status(200).json({success: true})
        return
    }
    res.status(401).json({success: false});
}