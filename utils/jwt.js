import jwt from "jsonwebtoken";

export function checkAdmin (req, res) {
    const user = verifyUser(req, res);
    if (!user) return false;
    if (user.role === 'admin') return true
    res.status(401).json({"success": false})
    return false;

}

export function verifyUser(req, res) {
    const jwtToken = req.cookies.token;
    console.log(jwtToken);
    return jwt.verify(jwtToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (!err)
            return decoded;
        res.status(401).json({"success": false});
        return null;
    });
}
