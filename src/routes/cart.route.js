import express from 'express';

import * as cartContoller from '../controllers/cart.controller';


const router = express.Router();

//route to get a single note by their note id
router.get('/', cartContoller.getAllBooks);

export default router;