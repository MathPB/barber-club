const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb+srv://teteu:teteu@cluster0-bwebc.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);