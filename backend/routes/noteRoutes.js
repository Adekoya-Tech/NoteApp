import express from 'express'
import { notesControllers } from '../controllers/notesControllers.js'
import { auth } from '../middlewares/auth.js';

const notesRouter = express();

notesRouter.post('/create', auth, notesControllers.createNote);
notesRouter.get('/', notesControllers.getNotes);
notesRouter.put('/note/edit/:noteId', notesControllers.editNote);
notesRouter.delete('/note/delete/:noteId', notesControllers.deleteNote);

export default notesRouter;