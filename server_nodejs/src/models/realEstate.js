const mongoose = require('mongoose')
const { default: Config } = require('../../config')

const realEstateSchema = new mongoose.Schema({
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
        type: String,
        require: true
    },
    pricePer: {
        type: String,
        require: true
    },
    electricPrice: {
        type: String,
        require: true
    },
    waterPrice: {
        type: String,
        require: true
    },
    typeRealEstate: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true,
        index: true,
    },
    state: {
        type: String,
        require: true,
        index: true
    },
    district: {
        type: String,
        require: true,
        index: true
    },
    addressDetail: {
        type: String,
        require: true
    },
    features: {
        type: String,
        require: true
    },
    imagePath: {
        type: Array,
        require: true
    },
    userId: {
        type: String,
        require: true,
        index: true
    },
    createTime: {
        type: Date,
        require: true
    },
    bedroom: {
        type: String,
        require: true
    },
    bathroom: {
        type: String,
        require: true
    },
    isPrivate: {
        type: Boolean,
        require: true
    },
    kitchenDetail: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        default: Config.defaultStatus
    },
    isApprove: {
        type: Boolean,
        requie: true,
        default: false
    },
})

realEstateSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.userId
    }
})

const RealEstate = mongoose.model('RealEstate', realEstateSchema)

module.exports = RealEstate