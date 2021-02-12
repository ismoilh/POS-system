const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const PaidSchema = new Schema({
    title: { type: Array },
    price: { type: Number },
    owner: { type: String },
    address: { type: String },
    phone: { type: String },
    count: { type: Number },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = Paid = mongoose.model("Paid", PaidSchema);
