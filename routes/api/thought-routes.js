const router = require('express').Router();

const { getAllThoughts } = require('../../controllers/thought-controller');

router.get(getAllThoughts);

module.export = router;
