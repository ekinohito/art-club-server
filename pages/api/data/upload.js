import {IncomingForm} from 'formidable'
import fs from 'fs'
import path from "path";
import {checkAdmin} from "../../../utils/jwt";

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async (req, res) => {
    if (!checkAdmin(req, res)) return
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm({uploadDir: path.resolve('./public/uploads')})
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)

            console.log('fields:', fields);
            console.log('files:', files);
            resolve({fields, files})
        })
    })
    let new_path = data.files.file.path + data.files.file.name
        .replace('/', 'fs')
        .replace('\\', 'bs')
    fs.rename(data.files.file.path, new_path,
        () => res.status(200).json({success: true, link: `/uploads/${path.parse(new_path).base}`})
    )
    //fs.writeFile(path.join(__dirname, '../../public/uploads', 'image.png'), data.files[0], () => res.status(200).json({success: true}))
}
