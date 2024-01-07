const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const route = require('./routes')
const app = express()
const port = 5000

app.use(route)

// console.log(process.env.BASE_URL);

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})