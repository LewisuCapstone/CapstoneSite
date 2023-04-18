module.exports = (sequelize, Sequelize) => {
  const BusinessUser = sequelize.define("businessuser", {
    email: {
      type: Sequelize.STRING
    },
    businessName: {
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
      type: Sequelize.STRING(4000)
    },
    address: {
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

  return BusinessUser;
};
