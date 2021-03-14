import jwt from 'jsonwebtoken';
import Cookies from "cookies";
import db from "../../db/db";
const bcrypt = require('bcrypt');

export default async (req, res) => {
    if (!req.body || req.method !== "POST") {
        res.status(404).json({success: false});
        return
    }

    const {username, password} = JSON.parse(req.body);
    let user = await db.findUsers(username)

    if (user && await bcrypt.compare(password, user.user_pwd_hash)) {
        const cookies = new Cookies(req, res)
        cookies.set('token', jwt.sign({
            username,
            role: user.user_role
        }, process.env.JWT_SECRET_KEY))
        res.status(200).json({success: true})
        return
    }
    res.status(401).json({success: false});
}