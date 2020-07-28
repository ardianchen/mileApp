import express from 'express'
import * as paket from 'src/controllers/paket'
import { inputValidation } from 'src/middlewares'
import * as validations from './validations'

const router = express.Router()

router.route('/package')
  .get(
    paket.read
  )
  .post(
    inputValidation(validations.post),
    paket.post
  )
router.route('/package/:id')
  .get(
    paket.detail
  )
  .put(
    paket.update
  )
  .patch(
    paket.update
  )
  .delete(
    paket.remove
  )

export default router
