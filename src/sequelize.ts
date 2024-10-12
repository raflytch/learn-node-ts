import { Sequelize } from "sequelize";
import config from "./config/database"; // Pastikan path ini sesuai

// Mengambil environment saat ini
const env = process.env.NODE_ENV || "development";
const { username, password, database, host, dialect } = config[env];

// Membuat instansi Sequelize
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  define: {
    timestamps: false, // Opsi global untuk model
  },
});

export default sequelize;
