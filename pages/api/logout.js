import Cookies from "cookies";

export default (req, res) => {
    const cookies = Cookies(req, res);

    cookies.set('token', null);
    res.status(200).json({success: true})
}
