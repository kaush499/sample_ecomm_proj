var express = require('express');
var bodyParser = require("body-parser");

var app = express();

var productRoutes = require('./routes/products/product');
var userRoutes = require('./routes/user');
var categoryRoutes = require('./routes/products/category');
var adminProductRoutes = require('./routes/admin/admin-products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/admin/products', adminProductRoutes);
app.use('/products/category', categoryRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

module.exports = app;


