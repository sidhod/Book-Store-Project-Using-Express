import Books from '../models/books.model';
//get all users
export const getAllBooks = async () => {
    const data = await Books.find();
    return data;
};