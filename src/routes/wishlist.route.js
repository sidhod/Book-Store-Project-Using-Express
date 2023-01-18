import express from 'express';

import * as wishlistController from '../controllers/wishlist.controller';
import { wishListAuth } from '../middlewares/auth.middleware'

const router = express.Router();

//route to get a books from wihlist 
router.get('/', wishListAuth, wishlistController.getAllBooks);

// Add book to the Wish List
router.post('/addbook/:_id', wishListAuth, wishlistController.addTowishList);

// Remove book from the Wish List
router.post('/removebook/:_id', wishListAuth, wishlistController.removeBookFromWishList);

export default router;