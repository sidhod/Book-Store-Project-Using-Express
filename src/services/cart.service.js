import Cart from '../models/cart.model';
import Book from '../models/books.model'
import object from '@hapi/joi/lib/types/object';
//get all books
export const getAllBooks = async () => {
    const data = await Cart.find();
    return data;
};

export const getBookById = async (body, _id) => {

    const findCart = await Cart.findOne({ userId: body.userId });
    var arr
    if (findCart != null) {
        console.log("find===>" + findCart + _id)
        findCart.books.forEach(object => {
            if (object.productId == _id) {
                arr = findCart.books.slice(findCart.books.indexOf(object), 1);
            }
        });
        return arr
    } else {
        throw new Error("slot is negative")
    }
}

export const addToCart = async (body, _id) => {
    const findBook = await Book.findOne({ _id: _id });
    let bookMatchFound = false;
    let updateBookDetails = {
        productId: findBook._id,
        description: findBook.description,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        price: findBook.price,
        discountPrice: findBook.discountPrice
    };
    if (findBook != null) {
        const findCart = await Cart.findOne({ userId: body.userId });
        console.log(findCart);
        if (findCart == null) {
            const createNewCart = await Cart.create({ userId: body.userId, books: [updateBookDetails] });
            return createNewCart
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
                console.log(addToCart.books.length - 1);
                return addToCart.books[addToCart.books.length - 1]
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
                console.log(addBookInCart.books.length - 1);
                return addBookInCart.books;

            }
        }
    } else {
        throw new Error("slot is negative")
    }
};

//remove book from cart
export const removeBookFromCart = async (body, _id) => {
    // console.log("id===>" + body)
    // const findBook = await Book.findOne({ _id: _id });
    let bookMatchFound = false;
    // if (findBook != null) {
    const findCart = await Cart.findOne({ userId: body.userId });
    if (findCart != null) {
        console.log("find===>" + findCart + _id)
        findCart.books.forEach(object => {
            if (object.productId == _id) {
                findCart.books.splice(findCart.books.indexOf(object), 1);
                bookMatchFound = true;
            }
        });
        if (bookMatchFound == true) {
            const removeBookFromCart = await Cart.findOneAndUpdate(
                {
                    _id: findCart._id
                },
                { books: findCart.books },
                {
                    new: true
                }
            );
            return removeBookFromCart;
        }
        else {
            throw new Error("Book does not exist in cart")
        }
    }
    else {
        throw new Error("Cart does not exist!!!")
    }
    // }
    // // else {
    // //     throw new Error("Book not found!!!")
    // // }
};


//increase quntity of book
export const increaseBook = async (body, _id) => {
    let bookMatchFound = false;
    const findCart = await Cart.findOne({ userId: body.userId });
    if (findCart != null) {
        findCart.books.forEach(object => {
            if (object.productId == _id) {
                object.quantity += 1;
                bookMatchFound = true;
            }
        });
        if (bookMatchFound == true) {
            const increaseQuantity = await Cart.findOneAndUpdate(
                {
                    _id: findCart._id
                },
                { books: findCart.books },
                {
                    new: true
                }
            );
            return increaseQuantity;

        }
        else {
            throw new Error("Book does not exist in cart")
        }
    }
    else {
        throw new Error("Cart does not exist!!!")
    }
};


// decrease quntity of book
export const decreaseBook = async (body, _id) => {

    let bookMatchFound = false;
    const findCart = await Cart.findOne({ userId: body.userId });
    console.log(findCart)
    if (findCart != null) {
        console.log(_id)
        findCart.books.forEach(object => {

            if (object.productId == _id) {
                if (object.quantity <= 1) {
                    findCart.books.splice(findCart.books.indexOf(object), 1);

                } else {
                    object.quantity -= 1;
                }
                bookMatchFound = true;
            }
        });
        if (bookMatchFound == true) {
            const increaseQuantity = await Cart.findOneAndUpdate(
                {
                    _id: findCart._id
                },
                { books: findCart.books },
                {
                    new: true
                }
            );
            return increaseQuantity;

        }
        else {
            throw new Error("Book does not exist in cart")
        }
    }
    else {
        throw new Error("Cart does not exist!!!")
    }
};


