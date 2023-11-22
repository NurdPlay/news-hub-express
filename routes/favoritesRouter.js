const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Retrieve a list of all favorited articles for a user');
  })
  .post((req, res) => {
    res.send('Add an article to a user\'s favorites');
  });

router.route('/:articleId')
  .delete((req, res) => {
    res.send(`Remove article with ID ${req.params.articleId} from user's favorites`);
  });

module.exports = router;
