const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const timeSchema = new Schema({
    ClosingTime: Date,
    OpeningTime: Date,
    KendimOpen: Date,
    KendimClose: Date
})

module.exports = mongoose.model('Time', timeSchema);