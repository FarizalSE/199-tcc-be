import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "notes"
const User = db.define(
  "users", // Nama Tabel
  {
    name : Sequelize.STRING,
    email : Sequelize.STRING,
    gender : Sequelize.STRING,
    password : Sequelize.STRING,
    refresh_token : Sequelize.TEXT
  }, {
    freezeTableName : true
  }
);

db.sync().then(() => console.log("Database synced"));

export default User;
