import HttpStatus from 'http-status-codes';
import * as CustomerDetailsService from '../services/customerdetails.service';

/**
 * Controller to add customer details
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addDetails = async (req, res, next) => {
    try {
        const data = await CustomerDetailsService.addDetails(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Customer details added successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};