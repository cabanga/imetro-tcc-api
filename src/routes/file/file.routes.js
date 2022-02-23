import { Router } from 'express'
import { upload_document } from '#controllers/file.controller'

import multer from 'multer'

//const upload = multer({ dest: 'public/' }).single("document");
upload = multer({ dest: 'public/' })



const router = Router()

router.route('/upload_document', upload.single('document')).post(upload_document)




export default router