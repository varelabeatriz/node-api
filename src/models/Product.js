const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    hs: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);