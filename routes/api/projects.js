const router = require('express').Router();
const projectCtrl = require('../../controllers/projects');

router.post('/', projectCtrl.createProject);

module.exports = router;