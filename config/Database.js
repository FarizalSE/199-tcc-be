import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("notes", "root", "", {
  host: "34.134.64.159",
  dialect: "mysql",
});

export default db;
