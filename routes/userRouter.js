const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Retrieve a list of all users');
  })
  .post((req, res) => {
    res.send('Create a new user');
  });

router.route('/:userId')
  .put((req, res) => {
    res.send(`Update information for user with ID ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.userId}`);
  });

module.exports = router;
