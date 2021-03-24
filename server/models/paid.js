const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const PaidSchema = new Schema({
    title: [{ type: Array }],
    price: { type: Number },
    owner: { type: String },
    address: { type: String },
    bonus: { type: Number },
    bonusPrice: { type: Number },
    extra: { type: String },
    phone: { type: String },
    bonus: { type: Number },
    time: { type: String },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = Paid = mongoose.model("Paid", PaidSchema);
