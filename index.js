import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import path from 'path'

const port = process.env.PORT || 4000
const app = express()
app.use(express.static(path.join(__dirname, '.')))

// const bodyParser = require("body-parser");
// const apiRoute = require("./src/route/api");

// app.use("/api", apiRoute);
app.use(bodyParser.json())
app.use(
  cors({
    origin: 'http://localhost:4000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'PATCH', 'DELETE'],
    credentials: true,
  })
)

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port)
console.log('Server Ready!')
