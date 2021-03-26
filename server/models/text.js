const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ZeitSchema = new Schema({
    zeit: String,
    jetzt: String,
    soeinfach: String,
    gibStandort: String,
    restaurantund: String,
    bezaheln: String,
    gib: String,
    wastrift: String,
    bezahlebarorder: String,
    diecheffood24: String,
    deinezeit: String,
    deineextras: String,
    deinegarantie: String,
    deinevorteile: String,
    unser: String,
    exzellenter: String,
    lieferservices: String,
    lust: String
})

module.exports = mongoose.model('Zeit', ZeitSchema);

