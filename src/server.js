import app from './app.js'
import dotenv from 'dotenv'
import https from 'https'
import fs from 'fs'
import morgan from 'morgan'
import connection from './config/connection/db.config.js'
import { connect } from 'http2'
// import connectDB from './configs/db.controller.js'



dotenv.config()
// connectDB()

let port = process.env.APP_PORT
const path_to_key = process.env.KEY_PATH
const path_to_cert = process.env.CERT_PATH


 async function bootstrap(){

   try {

      await connection.sync()
      const environment = process.env.NODE_ENV;
      var httpsOptions= {
      key: fs.readFileSync(`${path_to_key}`),
      cert: fs.readFileSync(`${path_to_cert}`),
   };
   
   
   var server = https.createServer(httpsOptions, app).listen(port, ()=>{
      console.log(`API services running on  port ${port}`)
   }) 
   } catch(err) {
      console.error(err)
      process.exit(1)

   }




}

bootstrap()

