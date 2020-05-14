module.exports = function(sequelize, DataTypes) {
  var Todos= sequelize.define("Todo", {
    title: DataTypes.STRING,
    category: DataTypes.TEXT,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
  },
    ETA: DataTypes.DATE,
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
  }
  });
  return Todos;
};