const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const timeSchema = new Schema({
    ClosingTime: Number,
    OpeningTime: Number,
    KendimOpen: Number,
    KendimClose: Number
})

module.exports = mongoose.model('Time', timeSchema);