// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/quitter_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes);

app.listen(PORT, console.log(`Server running at http://localhost:${PORT}`));