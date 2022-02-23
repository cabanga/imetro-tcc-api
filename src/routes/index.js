import * as express from "express";
import authRouter from './auth/auth.routes.js'
import fileRouter from './file/file.routes.js'


const router = express.Router()
router.use('/auth', authRouter)
router.use('/file', fileRouter)

router.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'API DIONE ORIGINAL, IMETRO, 2022'
  })
})

export default router