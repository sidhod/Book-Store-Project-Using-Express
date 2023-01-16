import express from 'express';

import * as booksController from '../controllers/books.controller';


const router = express.Router();

//route to get a single note by their note id
router.get('/get', booksController.getAllBooks);

export default router;
