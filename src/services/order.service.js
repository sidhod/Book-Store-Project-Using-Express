import Order from '../models/order.model';
import Cart from '../models/cart.model';
import Book from '../models/books.model'
export const getAllBooksInOrder = async () => {
    const data = await Order.find();
    return data;
};
export const addToOrder = async (body, _id) => {
    // const d = new Date();
    // let name = month[d.getMonth()] + " " + d.getDate();
    const findBook = await Book.findOne({ _id: _id });
    let bookMatchFound = false;
    let updateBookDetails = {
        productId: findBook._id,
        description: findBook.description,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        price: findBook.price,
        discountPrice: findBook.discountPrice,
        quantity: findBook.quantity,
        // date: `${name}`
    };
    if (findBook != null) {
        const findCart = await Order.findOne({ userId: body.userId });
        console.log(findCart);
        if (findCart == null) {
            const createNewCart = await Order.create({ userId: body.userId, books: [updateBookDetails] });
            return createNewCart
        } else {
            findCart.books.forEach(object => {
                console.log("pass====>" + _id)
                console.log('product id==>' + object.productId)
                if (object.productId == _id) {
                    bookMatchFound = true;
                }
            });
            if (bookMatchFound == true) {
                const addToCart = await Order.findOneAndUpdate(
                    {
                        _id: findCart._id
                    },
                    { books: findCart.books },
                    {
                        new: true
                    }
                );
                console.log(addToCart.books.length - 1);
                return addToCart
            }
            else {
                const addBookInCart = await Order.findOneAndUpdate(
                    {
                        _id: findCart._id
                    },
                    { $push: { books: [updateBookDetails] } },
                    {
                        new: true
                    }
                );
                console.log(addBookInCart.books.length - 1);
                return addBookInCart;

            }
        }
    } else {
        throw new Error("slot is negative")
    }
};