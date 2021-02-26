const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const phoneSchema = new Schema({
    phone: Number,
    email: String
})

module.exports = mongoose.model("Phone", phoneSchema);