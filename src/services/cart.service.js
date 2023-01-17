import Cart from '../models/cart.model';
import Book from '../models/books.model'
//get all books
export const getAllBooks = async () => {
    const data = await Cart.find();
    return data;
};

export const addToCart = async (body, _id) => {
    const findBook = await Book.findOne({ _id: _id });
    let bookMatchFound = false;
    let updateBookDetails = {
        productId: findBook._id,
        description: findBook.description,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        price: findBook.price
    };
    if (findBook != null) {
        if (findBook.quantity >= 1) {
            const findCart = await Cart.findOne({ userId: body.userId });
            console.log(findCart);
            if (findCart == null) {
                const createNewCart = await Cart.create({ userId: body.userId, books: [updateBookDetails] });
                return createNewCart;

            } else {
                findCart.books.forEach(object => {
                    console.log("pass====>" + _id)
                    console.log('product id==>' + object.productId)
                    if (object.productId == _id) {

                        object.quantity += 1;
                        bookMatchFound = true;
                    }
                });
                if (bookMatchFound == true) {
                    const addToCart = await Cart.findOneAndUpdate(
                        {
                            _id: findCart._id
                        },
                        { books: findCart.books },
                        {
                            new: true
                        }
                    );
                    return addToCart;
                }
                else {
                    const addBookInCart = await Cart.findOneAndUpdate(
                        {
                            _id: findCart._id
                        },
                        { $push: { books: [updateBookDetails] } },
                        {
                            new: true
                        }
                    );
                    return addBookInCart;
                }

            }
        } else {
            throw new Error("slot is negative")
        }
    } else {
        throw new Error("Slot of Book is not found!!!")
    }
};