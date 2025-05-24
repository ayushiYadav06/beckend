'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.project, {
      //   foreignKey: 'project_manager',
      //   as: 'managedProjects', // Alias for projects managed by this user
      // });
    }
  }
  user.init({
    name: DataTypes.STRING,
    userId: {
      type: DataTypes.STRING,
      field: 'userid'
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    team: DataTypes.STRING,
    lineManagers: {
      type: DataTypes.STRING,
      field: 'linemanagers'
    },
    blendedRate: {
      type: DataTypes.STRING,
      field: 'blendedrate'
    },
    deleted: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
    token: DataTypes.STRING,
    token_expire: DataTypes.STRING,
    access: DataTypes.STRING,
    company_role: DataTypes.STRING,
    company_name: DataTypes.STRING,
    otp: DataTypes.STRING,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'isdeleted'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdat'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedat'
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    underscored: false,
    timestamps: true,
  });

  user.isEmailTaken = async (email, excludeUserId) => {
    const user = await user.findOne({
      where: {
        email,
        userId: {
          [Op.ne]: excludeUserId
        }
      }
    });
    return user;
  }

  user.isPasswordMatch = async (password, hash) => {
    return bcrypt.compareSync(password, hash);
  }
  return user;
};