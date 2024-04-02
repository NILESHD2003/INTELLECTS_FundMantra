const express = require('express');
const router = express.Router();

const {sip100, sip1000, largeCap, smallCap,detailed_amc, midCap} = require('../Controllers/Collection')

router.get('/sip100', sip100);
router.get('/sip1000', sip1000);
router.get('/smallCap', smallCap);
router.get('/midCap', midCap);
router.get('/largeCap', largeCap);
router.get('/detailed_amc/:id',detailed_amc);

module.exports = router;
