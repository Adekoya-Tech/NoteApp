import express from 'express';
import incomesControllers from '../controllers/incomesControllers.js';
import { auth } from '../middlewares/auth.js';

const incomeRouter = express.Router();

incomeRouter.post('/create', auth, incomesControllers.createIncome);


incomeRouter.get('/', incomesControllers.listIncomes)

incomeRouter.delete('/delete/:incomeId', incomesControllers.deleteIncome)

export default incomeRouter;
