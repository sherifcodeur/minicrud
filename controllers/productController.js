// we import the model so we can interact with the database
const mongoose = require('mongoose');

const Product = require('../models/productModel');



// shows all products
const index = (req,res)=>{

     Product.find().then((result)=>{

           //console.log(result);
    res.render('./products/index',{allproducts:result});
     }).catch(err=>console.log(err));
    

}


// sends to a form to create a product
const create = (req,res)=>{

    res.render('./products/create');

}

// receive the req from the form to create a product in the db
const store = (req,res)=>{

       // console.log(req.body.name);
        let newProduct = new Product(req.body);

         newProduct.save().then(res.redirect('/products')).catch(err=>console.log(err));

         



}

// show one product
const show = (req,res)=>{

    let theid = req.params.id;

    Product.findById(theid)
    .then(result=>{

        res.render(`./products/show`,{theproduct:result});

    })
    .catch(err=>console.log(err));    

}

// show the edit form with old values 
const edit = (req,res)=>{

    let theid = req.params.id;

    Product.findById(theid)
    .then(result=>{

        res.render(`./products/edit`,{theproduct:result});

    })
    .catch(err=>console.log(err));

}

// take back the values from the edit form and update them in the db
const update = (req,res)=>{

    let theid = req.params.id;

    console.log(req.method);

    // Product.findById(theid).then(result=>{

    //   result.update(req.body);
    // }).catch(err=>console.log(err));

    // on a un probleme pour updater

    console.log(theid);

}


// delete the produc form the database 
const destroy = (req,res)=>{



}


module.exports = {

    index,
    create,
    store,
    show,
    edit,
    update,    
    destroy,

}