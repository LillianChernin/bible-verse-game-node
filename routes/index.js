const express = require('express');
const router = express.Router();
const users = require('./users');

router.use('/api/v1/users', users);
router.get('*', (req, res) => {
  res.render('./four-zero-four', {
    documentTitle: "404 Error"
  });
});

module.exports = router;
