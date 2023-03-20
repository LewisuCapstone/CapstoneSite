module.exports = (sequelize, Sequelize) => {
  const CharityUser = sequelize.define("charityuser", {
    email: {
      type: Sequelize.STRING
    },
    charityName: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    zipCode: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    /*
    published: {
      type: Sequelize.BOOLEAN
    } */
    
  } 
                                  // comment below out to pluralize table name
  , { freezeTableName: true}     // un-comment to prevent pluralization of define() arg1 in table name
  );

  return CharityUser;
};
