const mongoose = require('mongoose')
const personSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    document:{
        type: Object,
        requere: true,
        unique: true
    },
    address:{
        type: Object,
        require: true
    }
});

module.exports = mongoose.model('PersonCollection', personSchema)