const mongoose = require('mongoose')
const Config = require('../../config')

const chatSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    adminId: {
        type: String,
        require: true,
    },
    
})

chatSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Chat = mongoose.model('Trading', chatSchema)

module.exports = Chat