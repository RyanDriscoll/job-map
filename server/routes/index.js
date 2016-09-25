'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
// module.exports = router;

// router.use('/tweets', require('./tweets'));
// router.use('/api', require('./routes'));
router.use('/jobleads', require('./tweets'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
