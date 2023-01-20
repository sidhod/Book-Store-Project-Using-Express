import express from 'express';

import * as customerdetailsController from '../controllers/customerdetails.controller';
import { userCartAuth } from '../middlewares/auth.middleware'

const router = express.Router();

// //route to get a single note by their note id
// router.get('/', userCartAuth, cartController.getAllBooks);

// Add book to the Cart
router.post('', userCartAuth, customerdetailsController.addDetails);

export default router;