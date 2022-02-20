const express = require('express')
const router = express.Router()




router.get('/login', (req, res) => {
  res.send({
    status: true,
    message: 'Login route'
  })
})

module.exports = router

/*

import { sign_in, test } from '@controllers/auth.controller'

const router = Router();

router.route('/login').post(sign_in);
router.route('/test').get(test);

export default router;
*/