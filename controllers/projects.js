const Project = require('../models/project');

 async function createProject(req, res) {
    try {
        const project = await Project.create(req.body);
        res.json({ project })
    } catch (error) {
      console.log(error);
        res.status(401).json({err: 'project creation error'})
    }
}

async function index(req, res) {
    try {
      const projects = await Project.find({}).sort('-createdAt').populate('addedBy');
      res.json({ projects });
    } catch (error) {
      res.status(401).json({err: 'cannot show'})
    }
  }

module.exports = {
    createProject,
    index
}