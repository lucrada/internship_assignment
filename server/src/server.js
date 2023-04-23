const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/cms.route'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})