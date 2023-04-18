const db = require("../models");
const BusinessUser = db.businessusers;
const Op = db.Sequelize.Op;

// Create and Save a new BusinessUser
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a BusinessUser
  const businessuser = {
    email: req.body.email,
    businessName: req.body.businessName,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    description: req.body.description,
    address: req.body.address
  };

  // Save BusinessUser in the database
  BusinessUser.create(businessuser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the BusinessUser."
      });
    });
};

// Retrieve all BusinessUsers from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  BusinessUser.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving businessusers."
      });
    });
};

// Find a single BusinessUser with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  BusinessUser.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find BusinessUser with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving BusinessUser with id=" + id
      });
    });
};

// Update a BusinessUser by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  BusinessUser.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "BusinessUser was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update BusinessUser with id=${id}. Maybe BusinessUser was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating BusinessUser with id=" + id
      });
    });
};

// Delete a BusinessUser with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  BusinessUser.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "BusinessUser was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete BusinessUser with id=${id}. Maybe BusinessUser was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete BusinessUser with id=" + id
      });
    });
};

// Delete all BusinessUsers from the database.
exports.deleteAll = (req, res) => {
  BusinessUser.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} BusinessUsers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all businessusers."
      });
    });
};

// find all published BusinessUser
exports.findAllPublished = (req, res) => {
  BusinessUser.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving businessusers."
      });
    });
};
