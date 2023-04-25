import Books from '../models/books.model';
//get all users
export const getAllBooks = async () => {
    const data = await Books.find();
    return data;
};

export const paginationBooks = async (currentPage) => {
    let booksPerPage = 4;
    const data = await Books.find().limit(booksPerPage).skip(currentPage * booksPerPage);
    return data
};

export const searchBooks = async (body) => {
    const data = await Books.find({ bookName: { $regex: `${body.search}`, $options: "i" } })
    return data;
};

export const sortBooks = async () => {
    const data = await Books.find().sort({ price: 1 })
    return data;
};

export const sortondateBooks = async () => {
    const data = await Books.find().sort({ createdAt: 1 })
    return data;
};