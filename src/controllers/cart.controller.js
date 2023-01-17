import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooks = async (req, res, next) => {
    try {
        const data = await CartService.getAllBooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addToCart = async (req, res, next) => {
    try {
        const data = await CartService.addToCart(req.body, req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book added To cart'
        });
    } catch (error) {
        next(error);
    }
};