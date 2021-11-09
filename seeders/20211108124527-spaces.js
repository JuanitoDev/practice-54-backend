"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "John Doe's Space",
          description:
            "Welcome to my Space, I hope you will like my stories. Normally I share writes about Fashion, Food and Lifestyle.",
          backgroundColor: "#F4F1DE",
          color: "#3D405B",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Dane Joe's Space",
          description:
            "Get the latest space exploration, innovation and astronomy news. My Space celebrates humanity's ongoing expansion across the final frontier.",
          backgroundColor: "#F4F1DE",
          color: "#81B29A",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
