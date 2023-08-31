const express = require('express');
const testController = require('../controllers/test.contoller');

const router = express.Router();

router.get("/associations", testController.test);

module.exports = router;
