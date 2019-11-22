const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.INTEGER,
    },
    creation_date: {
      type: DataTypes.DATE,
    },
    last_login: {
      type: DataTypes.DATE,
    },
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt
        .hashSync(user.password, bcrypt
        .genSaltSync(10), null);
      },
    },
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
};
