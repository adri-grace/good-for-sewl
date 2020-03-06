const router = require('express').Router();
const projectCtrl = require('../../controllers/projects');

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, projectCtrl.createProject);
router.get('/', projectCtrl.index);
router.delete('/_id', isAuthenticated, projectCtrl.deleteProject);

function isAuthenticated(req,res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authorized'});
}

module.exports = router;