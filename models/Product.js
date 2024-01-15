const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true
        },
        nameProduct: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        priceArs: {
            type: Number,
            required: true
        },
        priceUsd: {
            type: Number,
            default: false
        },
    }, 
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;