import { Router } from 'express'
import { upload_document } from '#controllers/file.controller'

import multer from 'multer'

//const upload = multer({ dest: 'public/' }).single("document");
const upload = multer({ dest: 'public/' })



const router = Router()

router.post('/upload_document', upload.single('document'), upload_document)

//router.route('/upload_document').post(upload_document, upload.single('document'))




export default router