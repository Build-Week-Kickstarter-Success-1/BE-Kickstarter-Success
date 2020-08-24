const express = require('express');
const router = express.Router();

const Reviews = require("./reviews_model.js");

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Reviews.getById(id)
      .then(review => {
        res.status(200).json({ data: review })
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "We could not get the data" });
      });
  });

router.post('/', (req, res) => {
  const newProject = req.body;

  Reviews.insert(newProject)
    .then(project => {
      res.status(201).json({ data: project });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "We could not add the review" });
    });
});

module.exports = router;