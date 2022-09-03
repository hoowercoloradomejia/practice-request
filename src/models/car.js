const mongoose = require('mongoose')
const carSchema = mongoose.Schema({

    placa:{
        type: String,
        require: true
    },
    marca:{
        type: String,
        require: true
    },
    color:{
        type: NString,
        require: true
    },
    modelo:{
        type: String,
        requere: true,
        unique: true
    },
    
    });

module.exports = mongoose.model('CarCollection', carSchema)
/*
placa
marca
modelo
color
concesionarios: array
*/