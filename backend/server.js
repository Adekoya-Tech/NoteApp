import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors'
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import incomeRouter from './routes/incomeRoutes.js';
import notesRouter from './routes/noteRoutes.js';

const app = express();
connectDB();

//MIDLEWARES
app.use(express.json()); // This is used for body parser
app.use(cors())

app.get('/', (req, res) => {
	res.json({ Hello: 'Welcome to note backend' });
});

app.use('/api/auth', authRouter);

app.use('/api/incomes', incomeRouter);

app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
	console.log(`
  Server is running on port:${PORT}
  `),
);
