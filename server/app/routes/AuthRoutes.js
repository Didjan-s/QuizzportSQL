const express = require('express')
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/login",(request,response) => {

    const {firstName, lastName, numBillet} = request.body

})

module.exports = router