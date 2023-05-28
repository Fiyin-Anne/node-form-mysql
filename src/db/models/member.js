const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Member = sequelize.define("member", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    needsPT: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Member;
};
