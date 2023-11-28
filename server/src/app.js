const express = require('express');
const projectsRouter = require('./routes/projects.router')
const connectMongo = require('./utils/mongo');
const cloudinary = require('cloudinary').v2;

const app = express();

connectMongo();

cloudinary.config({
    secure: true
});

app.use(express.json());

app.use('/api', projectsRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
})