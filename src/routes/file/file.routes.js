import { Router } from 'express'
import { upload_document } from '#controllers/file.controller'

const router = Router()

router.route('/upload_document').post(upload_document)




export default router