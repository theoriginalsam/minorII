const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cart = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
   
    // total: {
    //     type: Number,
    //     required: true,
    // }
}, {
    timestamps: true
})
// const CartSchema = new Schema({
//     items: [ItemSchema],
//     subTotal: {
//         default: 0,
//         type: Number
//     }
// }, {
    // timestamps: true
// })
module.exports = mongoose.model('cart', cart);