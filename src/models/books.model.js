import { Schema, model } from 'mongoose';

const userSchema = new Schema(

    {
        description: {
            type: String
        },
        discountPrice: {
            type: Number
        },
        bookImage: {
            type: String
        },
        bookName: {
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
    },
    {
        timestamps: true
    }

);

export default model('Book', userSchema, 'Books');
