import express from 'express';

import * as cartController from '../controllers/cart.controller';
import { userCartAuth } from '../middlewares/auth.middleware'

const router = express.Router();

//route to get a single note by their note id
router.get('/', userCartAuth, cartController.getAllBooks);

//id
router.get('/:_id', userCartAuth, cartController.getBookById);

// Add book to the Cart
router.post('/addTocart/:_id', userCartAuth, cartController.addToCart);

//Remove book from Cart\
router.post('/removebook/:_id', userCartAuth, cartController.removeBookFromCart);

//increase quantity
router.post('/increaseQ/:_id', userCartAuth, cartController.increaseBook);

//decrease quantity
router.post('/decreaseQ/:_id', userCartAuth, cartController.decreaseBook);

export default router;