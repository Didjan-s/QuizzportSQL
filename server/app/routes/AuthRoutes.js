const express = require('express')
const jwt = require("jsonwebtoken")
client = require("../pgclient")

const router = express.Router()

router.post("/login",async (request,response) => {

    const {email, ticket} = request.body

    if(isEmail(email) && containOnlyNumbers(ticket)){

        try {
            const result = await client.query('SELECT * FROM users WHERE email = $1 AND eticket = $2', [email, ticket]);
        
            if (result.rows.length === 1) {
                var cookieMaxAge = 24 * 60 * 60 * 1000

                var token = jwt.sign({user : result.rows[0]},process.env.JWTSECRET,{
                    expiresIn : cookieMaxAge,

                })
                console.log(jwt.verify(token,process.env.JWTSECRET));

                response.cookie('Session',token,{
                    httpOnly: true,
                    maxAge : cookieMaxAge,

                })
                response.status(200).json({ message: 'Connexion réussie' });
            } else {
                 response.status(401).json({ message: 'Identifiants incorrects' });
            }
          } catch (error) {
                console.error('Erreur lors de la requête de connexion :', error);
                response.status(500).json({ message: 'Erreur interne du serveur' });
          }

    }else{
        response.status(401).json({ message: 'Identifiants incorrects' });
    }

})

function isEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function containOnlyNumbers(ticket) {
    const regex = /^\d+$/;
    if (!regex.test(ticket)) {
      return false; // Le code ne contient pas que des chiffres.
    }
    
    const intValue = parseInt(ticket, 10); // Convertit la chaîne en un entier.
    return intValue >= -2147483648 && intValue <= 2147483647;
}
  

module.exports = router