module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    eventName: {
      type: Sequelize.STRING
    },
    address: {
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
    description: {
      type: Sequelize.STRING(4000)
    },
    eventDateTime: {
      type: Sequelize.DATE
    }
    /*
    published: {
      type: Sequelize.BOOLEAN
    } */
    
  } 
                                  // comment below out to pluralize table name
  , { freezeTableName: true}     // un-comment to prevent pluralization of define() arg1 in table name
  );

  return Event;
};
