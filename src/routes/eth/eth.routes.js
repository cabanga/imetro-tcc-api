import { Router } from 'express'
import { create_transation } from '#controllers/eth.controller'

const router = Router()
router.route('/create_transation').post(create_transation)

export default router