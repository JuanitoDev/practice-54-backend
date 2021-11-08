"use strict";
const { Model } = require("sequelize");
const space = require("./space");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      story.belongsTo(models.space);
      space.hasMany(models.story);
    }
  }
  story.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
