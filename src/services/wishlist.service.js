import WishList from '../models/wishlist.model';
import Book from '../models/books.model'
//get all books
export const getAllBooks = async () => {
    const data = await WishList.find();
    return data;
};

//add Book In wishlist
export const addTowishList = async (body, _id) => {
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
        if (findBook.quantity >= 1) {
            const findInWishList = await WishList.findOne({ userId: body.userId });
            console.log(findInWishList);
            if (findInWishList == null) {
                const createNewCart = await WishList.create({ userId: body.userId, books: [updateBookDetails] });
                return createNewCart;

            } else {
                findInWishList.books.forEach(object => {
                    console.log("pass====>" + _id)
                    console.log('product id==>' + object.productId)
                    if (object.productId == _id) {
                        throw new Error("Book Is Present In Wish List")
                    }
                    bookMatchFound = true;
                });
                if (bookMatchFound === true) {
                    const addBookInCart = await WishList.findOneAndUpdate(
                        {
                            _id: findInWishList._id
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


//remove book from wish list
export const removeBookFromWishList = async (body, _id) => {

    let bookMatchFound = false;
    const findInWishList = await WishList.findOne({ userId: body.userId });
    if (findInWishList != null) {
        findInWishList.books.forEach(object => {
            if (object.productId == _id) {
                findInWishList.books.splice(findInWishList.books.indexOf(object), 1);
                bookMatchFound = true;
            }
        });
        if (bookMatchFound == true) {
            const removeBookFromWishList = await WishList.findOneAndUpdate(
                {
                    _id: findInWishList._id
                },
                { books: findInWishList.books },
                {
                    new: true
                }
            );
            return removeBookFromWishList;
        }
        else {
            throw new Error("Book does not exist in Wish List")
        }
    }
    else {
        throw new Error("Wish List does not exist!!!")
    }
};



