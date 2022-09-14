import express from 'express'
const app = express()

app.get('/ads', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)