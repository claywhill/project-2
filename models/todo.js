module.exports = function (sequelize, DataTypes) {
  var Todos = sequelize.define("Todo", {
    title: DataTypes.STRING,
    category: DataTypes.TEXT,
    createdAt: {
      field: "createdAt",
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    ETC: DataTypes.DATE,
    updatedAt: {
      field: "updatedAt",
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Todos;
};