const Pool = require('pg').Pool
const pool = new Pool( {
    user: "postgres",
    password: "vonSaschen",
    host: "localhost",
    port: 5432,
    database: "qr_code_pss"
})


module.exports = pool