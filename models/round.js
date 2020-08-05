'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Round.belongsToMany(models.Player, {
        through: "UserCourse",
        foreignKey: "userId",
        otherKey: "name",
      });
    }
  };
  // define association here
  Round.init({
    name: DataTypes.STRING,
    courseName: DataTypes.STRING,
    userId: DataTypes.STRING,
    date: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};