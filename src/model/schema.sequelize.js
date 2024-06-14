// PayloadData.js



import { DataTypes } from 'sequelize';
import connection from '../config/connection/db.config.js';



const PayloadData = connection.define('PayloadData', {

    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    MerchantCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MerchantTransactionReference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ReceiverMerchantCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AccountReference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ReceiverAccountType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NetworkCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Reason: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    YourCallBackURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    timestamps: false,
});

export default PayloadData;
