const mongoose = require('mongoose')
const Person = mongoose.model('Person', {
    titulo: String,
    sinopse: String,
    duracao: Number,
    dtaLanc: Date,
    cat: String



})

module.exports = Person