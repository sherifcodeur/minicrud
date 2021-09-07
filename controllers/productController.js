// we import the model so we can interact with the database




// shows all products
const index = (req,res)=>{


    res.render('./products/index');

}


// sends to a form to create a product
const create = (req,res)=>{

    res.render('./products/create');

}

// receive the req from the form to create a product in the db
const store = (req,res)=>{

        console.log(req.body);

}

// show one product
const show = (req,res)=>{



}

// show the edit form with old values 
const edit = (req,res)=>{



}

// take back the values from the edit form and update them in the db
const update = (req,res)=>{



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