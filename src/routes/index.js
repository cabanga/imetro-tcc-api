const express = require('express')
const router = express.Router()

const authRouter = require('./auth/auth.routes')
router.use('/auth', authRouter);

router.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'API DIONE ORIGINAL, IMETRO, 2022'
  })
})


module.exports = router
