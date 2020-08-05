'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Course, { foreignKey: "userId" });
      Player.belongsToMany(models.Round, {
        through: "UserCourse",
        foreignKey: "userId",
        otherKey: "name",
      });
    }
  };
  Player.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};