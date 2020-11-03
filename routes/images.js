const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/upload', checkAuth.checkAuth, imageUploader.upload.single('image'), imageController.upload);

module.exports = router;