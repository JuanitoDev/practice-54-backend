"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "John Doe",
          content: "UFO'S 🛸",
          imageUrl: "https://nobrow.net/wp-content/uploads/2020/09/UFO.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "John Doe",
          content: "PARANORMAL ACTIVITY 👻",
          imageUrl:
            "https://i.pinimg.com/originals/e5/a8/49/e5a8491779d34ea25dc0413ab95fc8e2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Dane Joe",
          content: "SPACE EXPLORATION 👩🏼‍🚀",
          imageUrl:
            "https://i.pinimg.com/originals/0b/ac/d2/0bacd2ca5dec9d5f85a639af334a1100.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Dane Joe",
          content: "UNIVERSE 🪐",
          imageUrl:
            "https://static.vecteezy.com/system/resources/previews/002/723/526/non_2x/space-galaxy-background-free-vector.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Dane Joe",
          content: "BLACK HOLES",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-hole-artwork-royalty-free-illustration-1616081355.",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
