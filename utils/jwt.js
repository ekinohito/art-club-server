import jwt from "jsonwebtoken";

export function checkAdmin (req, res) {
    const jwtToken = req.cookies.token
    try {
        const user = jwt.verify(jwtToken, 'pazhilayaKwakazyabra');
        if (user.role === 'admin') return true
        res.status(401).json({"success": false})
        return false;
    } catch (e) {
        res.status(401).json({"success": false})
        return false;
    }

}