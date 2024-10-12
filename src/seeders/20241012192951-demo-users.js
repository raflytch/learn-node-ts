"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "raflyazizabdillah",
        email: "rafly.aziz@example.com",
        password: await bcrypt.hash("password123", 10), // Password yang telah di-hash
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "andi",
        email: "andi@example.com",
        password: await bcrypt.hash("password123", 10), // Password yang telah di-hash
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "budi",
        email: "budi@example.com",
        password: await bcrypt.hash("password123", 10), // Password yang telah di-hash
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
