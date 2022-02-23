import { Router } from 'express'
import { upload_document } from '#controllers/file.controller'
//import upload from '#helpers/upload.helper'


const router = Router()

router.route('/upload_document').post(upload_document)
//router.route('/payment').post(get_hash)


export default router