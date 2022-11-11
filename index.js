require('dotenv').config()
const express = require('express')
const {v4: uuid} = require('uuid')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

let posts = []

app.get('/posts', (req, res) => {
    res.status(200).json({
        posts
    })
})

app.post('/posts', (req, res) => {
    const {title} = req.body,
        id = uuid()
    posts = posts.concat({
        id,
        title
    })
    res.status(201).json({
        id,
        title
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on http://127.0.0.1:${process.env.PORT}`)
})
