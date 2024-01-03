import express from 'express'
import authMiddleware from '../middleware/Auth.js'
import {addNote,getNote,getNoteById,updateNoteById,deleteNoteById} from '../controller/NoteController.js'
const router = express.Router();

router.use(authMiddleware)

router.post('/addNotes',addNote);
router.get('/getNotes',getNote);
router.get('/getNotes/:id',getNoteById);
router.put('/updateNotes/:id',updateNoteById);
router.delete('/deleteNotes/:id',deleteNoteById);


export default router