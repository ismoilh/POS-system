const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonusSchema = new Schema({
    bonus: Number
})

module.exports = mongoose.model('Bonus', bonusSchema);