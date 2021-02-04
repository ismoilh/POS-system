const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const OrderSchema = new Schema({
    title: { type: String },
    desc: { type: String },
    price: { type: Number },
    status: { type: String, required: true, default: "placed" },
    created_at: {
        type: Date,
        default: Date.now
    },
    owner: { type: ObjectId, ref: "User" },
    user: { type: ObjectId, ref: "User" }
});

module.exports = Order = mongoose.model("Order", OrderSchema);
