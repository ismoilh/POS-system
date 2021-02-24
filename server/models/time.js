const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const timeSchema = new Schema({
    ClosingTime: Number
})

module.exports = mongoose.model('Time', timeSchema);