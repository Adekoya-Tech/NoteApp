import express from 'express';
import authControllers from '../controllers/authController.js';
import {auth} from '../middlewares/auth.js'

const authRouter = express.Router();

authRouter.post('/signup', authControllers.signUp);

authRouter.post('/signin', authControllers.signIn);
authRouter.get('/users', authControllers.getUsers);
authRouter.get('/user/profile/:id', auth, authControllers.getUserProfile);

export default authRouter;
