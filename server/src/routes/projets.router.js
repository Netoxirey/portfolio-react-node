const express = require('express');

const projectsRouter = express.Router();

projectsRouter.get('/' ,(req, res) => {
    res.json({message: 'there are your projects'})
})

module.exports = projectsRouter;