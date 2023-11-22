const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Retrieve a list of all articles');
  })
  .post((req, res) => {
    res.send('Submit a new article for aggregation');
  });

router.route('/:articleId')
  .put((req, res) => {
    res.send(`Update information for article with ID ${req.params.articleId}`);
  })
  .delete((req, res) => {
    res.send(`Remove article with ID ${req.params.articleId} from aggregation`);
  });

module.exports = router;
