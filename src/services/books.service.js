import Books from '../models/books.model';
//get all users
export const getAllBooks = async () => {
    const data = await Books.find();
    return data;
};

export const paginationBooks = async (currentPage) => {
    let booksPerPage = 4;
    const data = await Books.find().limit(booksPerPage).skip(currentPage * booksPerPage);
    // const numberOfBooks = data.length;
    // const numberOfPages = Math.ceil(numberOfBooks / booksPerPage);
    // console.log("Number of books", numberOfBooks)
    // console.log("Number of Pages", numberOfPages)
    // const lastBookIndex = currentPage * booksPerPage;
    // const firstBookIndex = lastBookIndex - booksPerPage;
    // const currentBooks = data.slice(firstBookIndex, lastBookIndex)
    return data
};

export const searchBooks = async (body) => {
    const data = await Books.find({ bookName: { $regex: `${body.search}`, $options: "i" } })
    // let searchBooks = data.filter((object) => {
    //     if (object.bookName.toLowerCase().includes(body.search.toLowerCase())) {
    //         console.log(true)
    //         return object
    //     }
    // })
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