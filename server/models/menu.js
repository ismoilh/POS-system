const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require("./category")



const ImageSchema = new Schema({
    url: String,
    filename: String
});



const sizeSchema = new Schema({
    boy: {
        type: String,
        enum: ["S", "M", "L", "X", "XL", "XXL"]
    },
    price: {
        type: Number
    }
})




ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const opts = { toJSON: { virtuals: true } };


const MenuSchema = new Schema({
    title: String,
    stock: {
        type: Boolean,
        default: "false",
        enum: [true, false]
    },
    sous: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sous'
        }
    ],
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    size: [sizeSchema],
    quantity: {
        type: Number
    },
    images: [ImageSchema],
    count: { type: Number },
    price: {
        type: Number
    },
    description: String
}, opts);


module.exports = mongoose.model('Menu', MenuSchema);