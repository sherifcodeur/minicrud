

// import of external libraries - frameworks
const express = require('express');
const mongoose = require('mongoose');

// routes for products
const productRoutes = require('./routes/productRoutes');

// controller for views - general controller
const controller = require('./controllers/viewController');



// creating the express app
const app = express();

// template engine 
app.set('view engine','ejs');

// app.use(express);
// app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// DATABASE CONNEXION ----------------------------------//

// connectiong to database
mongoose.connect('mongodb://localhost:27017/firstdatabase').then().catch(err=>console.log(err));

//checking connexion
mongoose.connection.once('open',()=>{

    console.log('connection has been made');

}).on('error',()=>{

    console.log('erreur avec la connexion');
})



// MIDDLEWARES and Routes --------------------------------//

// to let the public folder be accessible to public
app.use(express.static('public'));



// index page of the site 
app.get('/', controller.index);

// routes for products
app.use('/products',productRoutes);


// app listening on port
app.listen(3000);