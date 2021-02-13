const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sousSchema = new Schema({
    sous: String
})

module.exports = mongoose.model('Sous', sousSchema);