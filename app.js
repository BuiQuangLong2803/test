const express = require('express');
const engines = require('consolidate');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

//npm i handlebars consolidate  
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

var indexController = require('./index.js');
app.use('/', indexController);

var productController = require('./product.js');
app.use('/product', productController);


var customerController = require('./customer.js');
app.use('/customer', customerController);


var PORT = process.env.PORT || 3000
app.listen(PORT)
console.log("Server is running!");