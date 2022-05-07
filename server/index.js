const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const port = process.env.PORT = 4000

//middleware
app.use(express.json())
app.use(cors())

//endpoints

app.listen(PORT, () => console.log(`Autobots Rollin on ${PORT}`));


