const { getAllProjects, addNewProject } = require('../models/projects.model');
const uploadImageCloudinary = require("../utils/cloudinary");

async function httpGetProjects(req, res) {
    try {
        const projects = await getAllProjects();
        if (!projects) {
            return res.status(404).json({
                message: "Projects not found",
            });
        }
        return res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}

async function httpPostProject(req, res) {
    const { title, description, technologies, image, githubUrl, demoUrl } = req.body;
    try {
        const imageUrl = await uploadImageCloudinary(image);
        const newProject = {
            title,
            description,
            technologies,
            imageUrl,
            githubUrl,
            demoUrl
        }
        const result = await addNewProject(newProject); //Sending the new task to the database.
        if (!result) {
            return res.status(400).json({
                message: "Couldn't create new project",
            });
        }
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    httpGetProjects,
    httpPostProject,

}