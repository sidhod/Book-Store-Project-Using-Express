import Cart from '../models/cart.model';
//get all books
export const getAllBooks = async () => {
    const data = await Cart.find();
    return data;
};