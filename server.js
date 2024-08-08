const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const path = require('path')
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, "client", "dist")));

mongoose.set('strictQuery', true); //entire line/true is optional
mongoose.connect(process.env.MONGO_URI,
    console.log('Connected To Database :)')
)

app.use('/cats', require('./routes/catsRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

app.listen(8000, () => {
    console.log('Server is running on Port 8000')
})