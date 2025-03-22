import express from "express";
import { getNotes, createNotes, updateNotes, deleteNotes, getNotesById } from "../controllers/NotesController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNotesById);
router.post("/add-notes", createNotes);
router.put("/edit-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router;
