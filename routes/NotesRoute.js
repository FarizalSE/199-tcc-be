import express from "express";
import { getNotes, createNotes, updateNotes, deleteNotes, getNotesById } from "../controllers/NotesController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();

router.get('/token', refreshToken);

router.get("/notes", getNotes);
router.get("/notes/:id", getNotesById);
router.post("/add-notes", verifyToken, createNotes);
router.put("/edit-notes/:id", verifyToken, updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router;
