const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true   //El trim eliminará los espacios en blanco al inicia y al final 
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true

    },
    registro: {
        type: Date,
        default: Date.now() 

    }

})

module.exports = mongoose.model('Usuario', UsuariosSchema);