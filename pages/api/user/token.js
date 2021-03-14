import {verifyUser} from "../../../utils/jwt";

export default (req, res) => {
    const user = verifyUser(req, res);
    if (!user) return;

    res.status(200).json({
        user: {
            username: user.username,
            role: user.role
        }
    });
}
