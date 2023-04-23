const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 4000
const app = express()
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/cms.route'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})