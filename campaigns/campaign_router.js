const express = require('express');
const router = express.Router();

const Campaigns = require("./campaign_model.js");

router.get('/', (req, res) => {
  Campaigns.get()
    .then(project => {
      res.status(200).json({ data: project })
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "We could not get the data" });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Campaigns.getById(id)
      .then(project => {
        res.status(200).json({ data: project })
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "We could not get the data" });
      });
  });

router.post('/', (req, res) => {
  const newProject = req.body;

  Campaigns.insert(newProject)
    .then(project => {
      res.status(201).json({ data: project });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "We could not add the project" });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newProject = req.body;

  Campaigns.update(id, newProject)
    .then(project => {
      res.status(201).json({ data: project })
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "We could not edit the data" });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Campaigns.remove(id)
    .then(project => {
      res.status(201).json({ data: project });
    })
    .catch(error => {
      console.log(error);
      res.status(404).json({ errorMessage: "We could not delete the project" });
    });
});

module.exports = router;