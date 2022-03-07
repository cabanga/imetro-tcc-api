import { Router } from 'express'
import {
  create_transation,
  info_transation
} from '#controllers/eth.controller'

const router = Router()
router.route('/create_transation').post(create_transation)
router.route('/info_transation').post(info_transation)

export default router