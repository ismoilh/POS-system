const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Name = require("./category")


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
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
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


MenuSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Menu', MenuSchema);