module.exports = app => {
  const charityusers = require("../controllers/charityuser.controller.js");

  var router = require("express").Router();

  // Create a new CharityUser
  router.post("/", charityusers.create);

  // Retrieve all CharityUsers
  router.get("/", charityusers.findAll);

  // Retrieve all published CharityUsers
  router.get("/published", charityusers.findAllPublished);

  // Retrieve a single CharityUser with id
  router.get("/:id", charityusers.findOne);

  // Update a CharityUser with id
  router.put("/:id", charityusers.update);

  // Delete a CharityUser with id
  router.delete("/:id", charityusers.delete);

  // Delete all CharityUsers
  router.delete("/", charityusers.deleteAll);

  app.use('/api/charityusers', router);
};
