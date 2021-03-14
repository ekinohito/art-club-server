import jwt from 'jsonwebtoken';
import Cookies from "cookies";
import db from "../../db/db";
const bcrypt = require('bcrypt');

export default async (req, res) => {
    if (!req.body || req.method !== "POST") {
        res.status(404).json({success: false});
        return
    }

    console.log(req.body)
    const {username, password} = JSON.parse(req.body);
    if (username && password) {
        bcrypt.hash(password, +process.env.SALT_ROUNDS)
            .then((value) => db.insertUsers({name: username, role: 'user', pwdHash: value }))
        const cookies = new Cookies(req, res)
        cookies.set('token', jwt.sign({
            username,
            role: 'user'
        }, process.env.JWT_SECRET_KEY))
        res.status(200).json({success: true})
        return
    }

    res.status(400).json({success: false});
}