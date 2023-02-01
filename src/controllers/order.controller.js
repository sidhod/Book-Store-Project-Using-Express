import HttpStatus from 'http-status-codes';
import * as orderService from '../services/order.service';
/**
 * Controller to get all whis list
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooksInOrder = async (req, res, next) => {
    try {
        const data = await orderService.getAllBooksInOrder();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All books in Order'
        });
    } catch (error) {
        next(error);
    }
};
/**
 * Controller to add customer details
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addToOrder = async (req, res, next) => {
    try {
        const data = await orderService.addToOrder(req.body, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Added In Order'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};