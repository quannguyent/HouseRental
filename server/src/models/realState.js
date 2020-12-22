const mongoose = require('mongoose')

const realStateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    note: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    pricePer: {
        type: String,
        require: true
    },
    electricPrice: {
        type: Number,
        require: true
    },
    waterPrice: {
        type: Number,
        require: true
    },
    typeRealState: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true,
        index: true
    },
    state: {
        type: String,
        require: true,
        index: true
    },
    addressDetail: {
        type: String,
        require: true
    },
    features: {
        type: Array,
        require: true
    },
    imagePath: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    createTime: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true,
        default : false
    }
})

realStateSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const RealState = mongoose.model('RealState', realStateSchema)

module.exports = RealState