
import { Schema, model } from 'mongoose';
const customerDetailsSchema = new Schema(
    {
        userId: {
            type: String
        },
        customer: [{
            name: {
                type: String
            },
            phoneNumber: {
                type: String
            },
            addressType: {
                type: String,

            },
            fullAddress: {
                type: String,

            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
        }]
    }
);

export default model('CustomerDetails', customerDetailsSchema);
