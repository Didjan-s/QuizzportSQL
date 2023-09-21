//bdd
const {Client} = require('pg')
client = new Client(process.env.BDDURL)

module.exports = client