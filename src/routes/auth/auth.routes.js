import { Router } from 'express'
import { sign_in } from '#controllers/auth.controller'


const router = Router()

router.route('/login').post(sign_in)


export default router



/*

import { sign_in, test } from '@controllers/auth.controller'

const router = Router();

router.route('/test').get(test);

export default router;
*/