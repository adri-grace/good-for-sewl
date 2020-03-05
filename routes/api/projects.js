const router = require('express').Router();
const projectCtrl = require('../../controllers/projects');

router.post('/', projectCtrl.createProject);
router.get('/', projectCtrl.index);

module.exports = router;