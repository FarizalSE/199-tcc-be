import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "notes"
const Note = db.define(
  "notes", // Nama Tabel
  {
    judul: Sequelize.STRING,
    catatan: Sequelize.STRING,
  }
);

db.sync().then(() => console.log("Database synced"));

export default Note;
