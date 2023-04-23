const mongoose = require('mongoose')

const schemas = {
    userModel: () => {
        const userSchema = mongoose.Schema({
            id: Number,
            first_name: String,
            last_name: String,
            email: String,
            gender: String,
            income: String,
            city: String,
            car: String,
            quote: String,
            phone_price: String,
        });
        return mongoose.model('User', userSchema)
    },
}

module.exports = schemas