module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var tutrouter = require("express").Router();

  // Create a new Tutorial
  tutrouter.post("/", tutorials.create);

  // Retrieve all Tutorials
  tutrouter.get("/", tutorials.findAllTuts);

  // Retrieve all published Tutorials
  tutrouter.get("/published", tutorials.findAllPublishedTuts);

  // Retrieve a single Tutorial with id
  tutrouter.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  tutrouter.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  tutrouter.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  tutrouter.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', tutrouter);
};
