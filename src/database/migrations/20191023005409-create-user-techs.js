"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_techs", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },

      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "techs", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_techs");
  }
};
