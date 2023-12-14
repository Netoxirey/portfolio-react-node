const express = require('express');
const projectsRouter = require('./routes/projects.router')
const connectMongo = require('./utils/mongo');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

connectMongo();

app.use(express.json());

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));


app.use(express.static(path.join(__dirname, "..", "..", "client", "dist" )));

// Handle React routing, return all requests to React app
app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "index.html" ));
});


app.use('/api/projects', projectsRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
})