const mongoose    = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter your username'],
        minlength: [5, 'minimum username length is (5) characters'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'please enter your email address'],
        unique: true,
        validate: [isEmail, 'please enter valid email address']
    },
    username: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [6, 'minimum password length is (6) characters'],
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User