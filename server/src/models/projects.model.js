const ProjectData = require('./projects.mongo');

async function getAllProjects() {
    try {
        const projects = await ProjectData.find({});
        return projects;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

async function addNewProject(project) {
    try {
        const result = await ProjectData.create(project);
        return result;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}


module.exports = {
    getAllProjects,
    addNewProject,
};

