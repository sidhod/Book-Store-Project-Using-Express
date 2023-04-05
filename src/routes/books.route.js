import express from 'express';

import * as booksController from '../controllers/books.controller';


const router = express.Router();

//route to get a single note by their note id
router.get('/get', booksController.getAllBooks);

//route for the pagination 
router.get('/pagi/:page', booksController.paginationBooks);

//route for the searching 
router.post('/search', booksController.searchBooks);

//route for the sorting on price
router.get('/sortp', booksController.sortBooks);

//route for the sorting on date
router.get('/sortd', booksController.sortondateBooks);

export default router;
