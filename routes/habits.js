import express from 'express';
import weekViewController from '../controllers/weekView.js';
import homeController from '../controllers/home.js';

const weekviewcontroller=new weekViewController();
const homecontroller= new homeController();

const habitsRouter= express.Router();
habitsRouter.get('/dailyView',homecontroller.home);
habitsRouter.post('/createHabit',homecontroller.create);
habitsRouter.get('/toggleStatus',homecontroller.toggleStatus);
habitsRouter.get('/deleteHabit/:id',homecontroller.delete);

habitsRouter.get('/weeklyView', weekviewcontroller.weekView);
habitsRouter.get('/weeklyView/toggleStatus', weekviewcontroller.toggleStatus);


export default habitsRouter;