const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const timeSchema = new Schema({
    ClosingTime: { type: Date, default: Date },
    OpeningTime: { type: Date, default: Date },
    KendimOpen: { type: Date, default: Date },
    KendimClose: { type: Date, default: Date }
})

module.exports = mongoose.model('Time', timeSchema);