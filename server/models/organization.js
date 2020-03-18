const mongoose = require('mongoose');

// Create organization Schema
const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'http://www.placecage.com/200/200'
    }
});

//Using bcrypt to hash the password
organizationSchema.pre('save', function(next) {
    if (this.isNew) {
        this.password = bcypt.hashSync(this.password, 12)
    }

    next()
});

//Prevent password from getting sent out with the rest of the data
organizationSchema.set('toJSON', {
    transform: (doc, organization) => {
        delete organization.password
        delete organization.__v
        return organization
    }
});

// Helper function to compare the password hashes
organizationSchema.methods.isValidPassword = function (typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
};

// Export organization
module.exports = mongoose.model('organization', organizationSchema)