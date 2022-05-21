const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const sequelize = require('./sequelize')
const homeData = require ("../src/homeData.js")


//middleware
app.use(express.json())
app.use(cors())
// app.use(express.static(path.resolve(__dirname, "../build")))

//endpoints
app.get('/api/info', async (req,res) => {
    let info = await sequelize.query(`
    SELECT username FROM mechanicuser
    `)
    res.status(200).send(info[0])
})


app.get('/', (req,res) => {
    res.send(homeData[0])
})


app.get('/api/q', async (req,res) => {
    let info = await sequelize.query(`
    SELECT * FROM equipmentQ
    `)
    res.status(200).send(info[0])
})

app.get('/api/a', async (req,res) => {
    let info = await sequelize.query(`
    SELECT qtext, atext 
    FROM equipmentA
    INNER JOIN equipmentQ ON equipmentA.equipqID = equipmentQ.equipqID
    `)
    res.status(200).send(info[0])
})
// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'))
// })


app.listen(PORT, () => console.log(`Autobots Rollin on ${PORT}`));


