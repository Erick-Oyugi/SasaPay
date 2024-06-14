import Joi from 'joi'

const ValidationJoiSchema = Joi.object({
    MerchantCode : Joi.string().required(),
    MerchantTransactionReference: Joi.string().required(),
    Currency: Joi.string().required(),
    Amount: Joi.number().required(),
    ReceiverMerchantCode: Joi.string().required(),
    AccountReference : Joi.string().required(),
    ReceiverAccountType: Joi.string().required(),
    NetworkCode: Joi.string().required(),
    CallBackURL: Joi.string().required(),
    Reason :  Joi.string().required(),
    // YourCallBackURL : Joi.string().required()

})

export default ValidationJoiSchema