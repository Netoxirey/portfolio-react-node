const express = require('express');
const { httpGetProjects, httpPostProject } = require("./projects.controller");

const projectsRouter = express.Router();

projectsRouter.get('/' ,httpGetProjects);

projectsRouter.post('/', httpPostProject );

module.exports = projectsRouter;