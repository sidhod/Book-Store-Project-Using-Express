import HttpStatus from 'http-status-codes';
import * as WishListService from '../services/wishlist.service';

/**
 * Controller to get all whis list
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooks = async (req, res, next) => {
    try {
        const data = await WishListService.getAllBooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All books in wishlist'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to add books in wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addTowishList = async (req, res, next) => {
    try {
        const data = await WishListService.addTowishList(req.body, req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book added To wishlist successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to remove book from wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeBookFromWishList = async (req, res, next) => {
    try {
        const data = await WishListService.removeBookFromWishList(req.body, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed from wish list successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};


