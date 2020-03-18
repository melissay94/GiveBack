let bcrypt = require('bcryptjs')
let mongoose = require('mongoose')

//Create User Schema
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        requied: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: 'http://www.placecage.com/200/200'
    }
});

//using bcrypt to hash the password
userSchema.pre('save', function(next) {
    if (this.isNew) {
        this.password = bcypt.hashSync(this.password, 12)
    }

    next()
});

//Prevent password from getting sent out with the rest of the data
userSchema.set('toJSON', {
    transform: (doc, user) => {
        delete user.password
        delete user.__v
        return user
    }
});

// Helper function to compare the password hashes
userSchema.methods.isValidPassword = function (typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
};

//Export user
module.exports = mongoose.model('User', userSchema)