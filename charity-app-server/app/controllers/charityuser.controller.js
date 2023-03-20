const db = require("../models");
const CharityUser = db.charityusers;
const Op = db.Sequelize.Op;

// Create and Save a new CharityUser
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a CharityUser
  const charityuser = {
    email: req.body.email,
    charityName: req.body.charityName,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    description: req.body.description
  };

  // Save CharityUser in the database
  CharityUser.create(charityuser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the CharityUser."
      });
    });
};

// Retrieve all CharityUsers from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  CharityUser.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving charityusers."
      });
    });
};

// Find a single CharityUser with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  CharityUser.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find CharityUser with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving CharityUser with id=" + id
      });
    });
};

// Update a CharityUser by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  CharityUser.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CharityUser was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update CharityUser with id=${id}. Maybe CharityUser was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating CharityUser with id=" + id
      });
    });
};

// Delete a CharityUser with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  CharityUser.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CharityUser was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete CharityUser with id=${id}. Maybe CharityUser was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete CharityUser with id=" + id
      });
    });
};

// Delete all CharityUsers from the database.
exports.deleteAll = (req, res) => {
  CharityUser.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} CharityUsers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all charityusers."
      });
    });
};

// find all published CharityUser
exports.findAllPublished = (req, res) => {
  CharityUser.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving charityusers."
      });
    });
};
