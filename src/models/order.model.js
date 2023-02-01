import { Schema, model } from 'mongoose';

const userSchema = new Schema(

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
            },
            price: {
                type: Number
            },
            discountPrice: {
                type: Number
            },
            // date: {
            //     type: String
            // }
        }],
    }

);

export default model('Order', userSchema);
