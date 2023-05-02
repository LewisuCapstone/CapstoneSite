module.exports = app => {
  const events = require("../controllers/event.controller.js");

  var erouter = require("express").Router();

  // Create a new Event
  erouter.post("/", events.create);

  // Retrieve all Events
  erouter.get("/", events.findAll);

  // Retrieve all published Events
  erouter.get("/published", events.findAllPublished);

  // Retrieve a single Event with id
  erouter.get("/:id", events.findOne);

  // Update a Event with id
  erouter.put("/:id", events.update);

  // Delete a Event with id
  erouter.delete("/:id", events.delete);

  // Delete all Events
  erouter.delete("/", events.deleteAll);

  app.use('/api/events', erouter);
};