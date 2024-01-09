const controller = require('../controllers/teams');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/name/:value', controller.getByName);
router.get('/:id', controller.getById);

module.exports = router;