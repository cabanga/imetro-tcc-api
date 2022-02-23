import multer from 'multer'
import fs from 'fs'


const default_path = './src/loadingFile'



let dir = default_path

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
}

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
})


console.log(default_path)

const upload = multer({ storage: fileStorageEngine })

export default upload