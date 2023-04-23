require('dotenv').config()
const mongoose = require('mongoose')
const schemas = require('./schema')

const _connect = async () => {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
}

const getModels = async () => {
    await _connect()
    return {
        User: schemas.userModel(),
    }
}

module.exports = getModels