import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    firstName: {
      type: String

    },
    email: {
      type: String,
      unique: true

    },
    password: {
      type: String,
      required: true

    },
    mobileNumber: {
      type: Number

    },
  },
  {
    timestamps: true
  }
);

export default model('User', orderSchema);
