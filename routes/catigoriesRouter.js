const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Retrieve a list of all available categories');
  })
  .post((req, res) => {
    res.send('Create a new category');
  });

router.route('/:categoryId')
  .put((req, res) => {
    res.send(`Update information for category with ID ${req.params.categoryId}`);
  })
  .delete((req, res) => {
    res.send(`Delete category with ID ${req.params.categoryId}`);
  });

module.exports = router;
