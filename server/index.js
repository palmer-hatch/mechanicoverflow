const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const sequelize = require('./sequelize')

//middleware
app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, "../build")))

//endpoints
app.get('/api/info', async (req,res) => {
    let info = await sequelize.query(`
    SELECT * FROM mechanicuser
    `)
    res.status(200).send(info[0][0])
})
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})


app.listen(PORT, () => console.log(`Autobots Rollin on ${PORT}`));


