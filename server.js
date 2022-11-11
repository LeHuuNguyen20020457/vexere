const express = require('express')
const path = require('path')
const db = require('./models')
const app = express()
const port = 3000 || process.env.PORT
const {rootRouter} = require('./routers')

app.use(express.json())
app.use(express.urlencoded())

const publicPathDirectory = path.join(__dirname, './public')
app.use('/public', express.static(publicPathDirectory))

app.use('/api/v1', rootRouter)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})

