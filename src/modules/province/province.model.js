const { default: mongoose, Types ,Schema} = require('mongoose');

const ProvinceSchema = new Schema({
    name:{type:'string',require:true},
    count:{type:Number,require:false},
    men:{type:[String],require:true},   
    city:{type:[Types.ObjectId],require:true,ref:'city'},

});

const CitySchema = new Schema({
    title:{type:String , require:true},
    name:{type:String , require:true},
    description:{type:String , require:true},
    lat:{type:String , require:true},
    lng:{type:String , require:true},
    key:{type:Number , required:true},

});

const CategoryModel = model( "Category" , CategorySchema )
