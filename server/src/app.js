const express = require('express');
const User = require('./models/user');
const Player = require('./models/player');
const Product = require('./models/product');

Product.belongsTo(User, {as: 'user'});
const app = express();
app.use(express.urlencoded({extended:true}));

app.get('/',function (req,res) {
    res.send('OK!'); 
})

module.exports = app;