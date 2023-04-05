
import { Schema, model } from 'mongoose';
const wishListSchema = new Schema(
    {
        userId: {
            type: String
        },
        books: [{
            productId: {
                type: String
            },
            description: {
                type: String
            },
            bookName: {
                type: String
            },
            bookImage: {
                type: String
            },
            author: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number
            },
            discountPrice: {
                type: Number
            },
        }],
        cart_total: {
            type: Number
        },
        isPurchased: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default model('WishList', wishListSchema);
