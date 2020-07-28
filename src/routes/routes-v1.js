import express from 'express'

import paket from './paket'

const router = express.Router()

router.use('/', paket)

export default router
