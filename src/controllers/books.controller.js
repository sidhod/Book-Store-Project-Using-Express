import HttpStatus from 'http-status-codes';
import * as booksService from '../services/books.service';
/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooks = async (req, res, next) => {
    try {
        const data = await booksService.getAllBooks();
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
 * Controller to pagination book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const paginationBooks = async (req, res, next) => {
    try {
        const data = await booksService.paginationBooks(req.params.page);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to pagination book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchBooks = async (req, res, next) => {
    try {
        const data = await booksService.searchBooks(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'search books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to pagination book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const sortBooks = async (req, res, next) => {
    try {
        const data = await booksService.sortBooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'sort books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const sortondateBooks = async (req, res, next) => {
    try {
        const data = await booksService.sortondateBooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'sort on date books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};