module.exports = app => {
  const businessusers = require("../controllers/businessuser.controller.js");

  var busrouter = require("express").Router();

  // Create a new BusinessUser
  busrouter.post("/", businessusers.create);

  // Retrieve all BusinessUsers
  busrouter.get("/", businessusers.findAll);

  // Retrieve all published BusinessUsers
  busrouter.get("/published", businessusers.findAllPublished);

  // Retrieve a single BusinessUser with id
  busrouter.get("/:id", businessusers.findOne);

  // Update a BusinessUser with id
  busrouter.put("/:id", businessusers.update);

  // Delete a BusinessUser with id
  busrouter.delete("/:id", businessusers.delete);

  // Delete all BusinessUsers
  busrouter.delete("/", businessusers.deleteAll);

  app.use('/api/businessusers', busrouter);
};
