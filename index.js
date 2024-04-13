require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('facebook.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login first</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> this is youtube</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port} and running port from env PORT ${process.env.PORT} `)
})

