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

  async function getUsersProjects(req, res) {
    try {
      const usersProjects = await Project.find({'addedBy' : req.user._id}).sort('-createdAt').populate('addedBy');
      res.json({ usersProjects });
    } catch (error) {
      res.status(401).json({err: 'cannot show'})
    }
  }

  async function deleteProject(req, res) {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      getUsersProjects(req, res);
    } catch (error) {
      res.status(401).json({err: 'cannot delete'})
    }
  }

  async function editProject(req, res) {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id);
      getUsersProjects(req, res);
    } catch (error) {
      res.status(401).json({err: 'cannot edit'})
    }
  }


module.exports = {
    createProject,
    index,
    deleteProject,
    getUsersProjects,
    editProject
}