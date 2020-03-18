let mongoose = require('mongoose')

//Create event Schema
const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    eventdate: {
        type: String,
        required: true
    },
    eventlocation: {
        type: String,
        required: true
    },
    eventwebsite: {
        type: string
    },
    details: {
        type: String,
        required: true
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization'
    }
});

//Export event
module.exports = mongoose.model('Event', eventSchema)