
import express from 'express';
import startPageController from '../controllers/startPage.js';
import habitsRouter from './habits.js';

const router = express.Router();

const startpagecontoller = new startPageController();
router.get('/', startpagecontoller.home);
router.use('/habits', habitsRouter);

export default router;
