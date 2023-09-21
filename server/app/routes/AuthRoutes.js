const express = require('express')
const jwt = require("jsonwebtoken")
import {client} from 'app.js' 

const router = express.Router()

router.post("/login",(request,response) => {

    const {firstName, lastName, numBillet} = request.body

})

router.post("/api/profil/:id",(request,response) => {

    const userId = req.params.id;
    const query = 'SELECT * FROM utilisateurs WHERE id = $1';

    client.query(query, [userId], (error, result) => {
    if (error) {
      console.error('Erreur lors de la requête :', error);
      res.status(500).json({ error: "Erreur lors de la récupération du profil de l'utilisateur." });
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'Utilisateur non trouvé.' });
      } else {
        const user = result.rows[0];
        res.json(user);
      }
    }

})
})



module.exports = router