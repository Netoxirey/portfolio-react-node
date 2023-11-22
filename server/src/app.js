const express = require('express');
const projectsRouter = require('./routes/projets.router');
const connectMongo = require('./utils/mongo');

const app = express();

connectMongo();

app.use(express.json());

app.use('/api', projectsRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
})