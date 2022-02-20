import { Router } from 'express'
import { sign_in, sign_up } from '#controllers/auth.controller'


const router = Router()

router.route('/login').post(sign_in)
router.route('/register').post(sign_up)


export default router