import express from 'express';

import * as wishlistController from '../controllers/wishlist.controller';
import { OrderAuth, userAuth, userCartAuth } from '../middlewares/auth.middleware';
import * as orderControlller from '../controllers/order.controller';

const router = express.Router();

//route to get a books from order 
router.get('/', OrderAuth, orderControlller.getAllBooksInOrder);

// Add book in orders
router.post('/:_id', OrderAuth, orderControlller.addToOrder);

export default router;