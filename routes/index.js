const express = require('express');
const router = express.Router();

router.use('/swagger', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;