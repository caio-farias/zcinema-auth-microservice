const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

class User extends Model {
  static init(connection){
    super.init({
      first_name:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name:   {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:   {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    },{
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withPassword: {
          attributes: { include: ['password'] },
        }
      },
      modelName: 'Users',
      sequelize: connection,
      hooks: {
        beforeCreate: async (user) => {
          const hash = await bcrypt.hash(user.password, 10)
          user.password = hash
        }
      }
    })
  }
}

module.exports = User