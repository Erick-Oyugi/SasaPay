
import Sequelize from "sequelize";

const connection = new Sequelize({
    define: {
        // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
        // This was true by default, but now is false by default
        timestamps: false
      },
    dialect: 'mysql',
    host :'localhost',
    username: 'root',
    password: '',
    database :'sasapay',
    logging: true
})

export default connection