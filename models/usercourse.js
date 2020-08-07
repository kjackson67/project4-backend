'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.hasMany(models.Course, { foreignKey: "courseId" });
    }
  };
  UserCourse.init({
    name: DataTypes.STRING,
    courseName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};