const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sousSchema = new Schema({
    sous: String,
    price: Number
})

module.exports = mongoose.model('Sous', sousSchema);