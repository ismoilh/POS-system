const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const PaketSchema = new Schema({
    price: { type: Number },
    owner: { type: String },
    address: { type: String },
    phone: { type: String },
    paketcid: { type: ObjectId, ref: "User" }
})

module.exports = Paket = mongoose.model("Paket", PaketSchema);
