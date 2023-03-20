module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("charityuser", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  }, {
freezeTableName: true     // un-comment to prevent pluralization of define() arg1 in table name
});

  return Tutorial;
};
