const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

function connectMongo() {
    mongoose.connect(MONGO_URI);

    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (error) => {
        console.error('Failed to connect to MongoDB:', error);
    });
}

module.exports = connectMongo;
