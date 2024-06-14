
import axios from "axios"
import dotenv from 'dotenv'
import btoa from "btoa"

dotenv.config()




const clientId = 'yY2fQk65IqiS9hHcJpryRRv14ZywT0VUSBVOBmrg';
const clientSecret = 'iuCd4k9lTxo8ubnp9yWOjJnVWCIOW951PuWW8vEZxwTrZcsg4EHTGPYPg52OkRg4IsqY7wJgVcqbaqRjcJPjYZ9XrkOgaPzpau8kSXnGUdlMeKiLvxgmVQMq1I4hFrFt';

const SasaPayAuthentication = async(req, res) => {

  let bearerToken = {}

const credentials = btoa(`${clientId}:${clientSecret}`);

         
  try {
  await axios({
        url : process.env.AUTH_URL_ENDPOINT,
        method: 'GET',
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Basic ${credentials}`
        }

    })
    .then(response => {

      bearerToken = response.data;

      setTimeout(() => {
        console.log (`--------------------Generating Authorization Token-------------------------`)
      }, "1000");

      setTimeout(() => {
        console.log (bearerToken)
      }, "2000");

        res.status(200).json(bearerToken);

        // bearerToken = response.data
        console.log(bearerToken.access_token)
       
       })

    .catch((err) => {
        res.status(400).json(err);
        console.log(err)
       });
      }
      catch(err){
        

      }

      return bearerToken
}



export default SasaPayAuthentication