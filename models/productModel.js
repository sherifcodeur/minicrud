

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema([{

    name: {
        type:String,
        required:[true,"the name is a required field"],
    } ,

    description :{
        type:String,
        required:[true,"the descriptionis a required field"],
    },

    price:{
        type:Number,
        required:[true,"the price is a required field"],
    } ,




}]);


const Product = mongoose.model('Product', productSchema);


module.exports = Product ;