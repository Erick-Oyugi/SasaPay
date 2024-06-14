import SasaPayAuthentication from "../controller/AuthController/Auth.Controller.js"
import MpesaB2BController from "../controller/B2BController/B2B.Controller.js"
import express from 'express'


const router = express.Router()




router.post('/creditbank/api/v1/authentication', SasaPayAuthentication)
router.post('/creditbank/api/v1/mpesab2b',  MpesaB2BController)


export default router