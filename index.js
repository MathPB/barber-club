const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const hbs = handlebars.create({ /* config */ });

//config template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

//config bodyparser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());

   
    app.get('/cad', function(req, res){
        res.render(path.join('formulario.handlebars'))
    }) 
    






mongoose.connect('mongodb+srv://teteu:teteu@cluster0-bwebc.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);