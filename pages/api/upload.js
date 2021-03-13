import { IncomingForm } from 'formidable'
import fs from 'fs'
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
  fs.writeFile(path.join(__dirname, '../../public/uploads', 'image.png'), data.files[0], () => res.status(200).json({success: true}))
}
