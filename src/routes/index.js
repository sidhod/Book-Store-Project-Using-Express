import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import booksRoute from './books.route';
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';
import customerdetails from './customerdetail.route';
import orderRoute from './order.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/books', booksRoute);
  router.use('/cart', cartRoute);
  router.use('/wishlist', wishlistRoute);
  router.use('/customerdetails', customerdetails);
  router.use('/order', orderRoute);

  return router;
};

export default routes;
