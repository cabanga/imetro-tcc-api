import { Router } from 'express'
import { get_hash } from '#controllers/file.controller'


const router = Router()

router.route('/get_hash').post(get_hash)
router.route('/payment').post(get_hash)


export default router