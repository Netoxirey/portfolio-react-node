const mongoose = require('mongoose');

const projectDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    technologies: [String],
    imageUrl: String,
    githubUrl: String,
    demoUrl: String,
});

const ProjectData = mongoose.model('ProjectData', projectDataSchema);

module.exports = ProjectData;
