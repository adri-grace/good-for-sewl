const router = require('express').Router();
const projectCtrl = require('../../controllers/projects');

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, projectCtrl.createProject);
router.get('/', projectCtrl.index);
router.get('/user', isAuthenticated, projectCtrl.getUsersProjects);
router.delete('/:id', isAuthenticated, projectCtrl.deleteProject);

function isAuthenticated(req,res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authorized'});
}

module.exports = router;