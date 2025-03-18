const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req,res) => {
    res.send("Hello Hayk")
})

app.listen(PORT, () => console.log(`server started ${PORT}`))