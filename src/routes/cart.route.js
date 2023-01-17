import express from 'express';

import * as cartContoller from '../controllers/cart.controller';
import { userCartAuth } from '../middlewares/auth.middleware'

const router = express.Router();

//route to get a single note by their note id
router.get('/', userCartAuth, cartContoller.getAllBooks);

// Add book to the Cart
router.post('/addTocart/:_id', userCartAuth, cartContoller.addToCart);


export default router;