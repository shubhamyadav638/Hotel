const mongoose = require('mongoose');

// define the person schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default:[]
    },
    num_sales: {
        type: Number,
       default:0
    }
});

// create the person model
const menuItem = mongoose.model('menuItem', menuItemSchema);
module.exports = menuItem;
