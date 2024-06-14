import SasaPayAuthentication from "../AuthController/Auth.Controller.js"
import axios from "axios"
import dotenv from 'dotenv'
import ValidationJoiSchema from "../../model/schema/schema.joi.js"
import PayloadData  from "../../model/schema.sequelize.js"
import { v4 as uuidv4 } from 'uuid';


dotenv.config()





const MpesaB2BController = async (req, res) => {
try {
       

    const {access_token} = await SasaPayAuthentication()
    const id = uuidv4()


await PayloadData.create({...req.body, id})

    .then((result) => {
       console.log(result)
    })
    .catch((error) => {
        console.log(error);
    
    });

    const value = await ValidationJoiSchema.validateAsync({

        MerchantCode: req.body.MerchantCode,
        MerchantTransactionReference: req.body.MerchantTransactionReference,
        Currency:req.body.Currency,
        Amount: req.body.Amount,
        ReceiverMerchantCode: req.body.ReceiverMerchantCode,
        AccountReference: req.body.AccountReference,
        ReceiverAccountType: req.body.ReceiverAccountType,
        NetworkCode: req.body.NetworkCode,
        CallBackURL: process.env.CREDITBANK_URL_ENDPOINT,
        Reason: req.body.Reason,
        // YourCallBackURL : req.body.YourCallBackURL
 })

    axios({

        url : process.env.B2B_URL_ENDPOINT,
        method : 'POST',
        headers : {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${access_token}`
        },
        data : value

    })
    .then(response => {
        console.log(response.data)
        res.status(200).send(response.data)

    })
    .catch((err) => {
        res.status(400).json(err);
        console.log("Axios Error:",err)
       });
    
}
    
catch (err) {
    console.log(err)
 }


}


export default MpesaB2BController