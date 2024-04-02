const express = require('express');
const router = express.Router();

const {sip100, sip1000, largeCap} = require('../Controllers/Collection')

router.get('/sip100', sip100);
router.get('/sip1000', sip1000);
router.get('/largeCap', largeCap);

module.exports = router;
