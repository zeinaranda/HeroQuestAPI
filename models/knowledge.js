module.exports = (sequelize, DataTypes) => {
    const Knowledge = sequelize.define('knowledge', {
        knowledgeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
    }, {
        tableName: 'knowledge'
    });

    return Knowledge;
}