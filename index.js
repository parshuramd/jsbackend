require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Bhai UI toh Build kar le!!</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('<div>Musk Se Pucha kya</div>')
})
app.get('/fb', (req, res) => {
    res.send(`<div style="width: 300px; height: 200px; background-color: #f0f0f0; border: 1px solid #ccc; padding: 20px; box-sizing: border-box;">
    <h2>This is a sample div</h2>
    <p>Content goes here...</p>
  </div>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})