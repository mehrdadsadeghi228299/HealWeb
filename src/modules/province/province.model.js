const {  Types ,Schema, model} = require('mongoose');

const ProvinceSchema = new Schema({
    name:{type:'string',require:true},
    count:{type:Number,require:false},
    men:{type:[String],require:true},   
    city:{type:[Types.ObjectId],require:true,ref:'city'},

});

const ProvinceModel = model( "province" , ProvinceSchema );

module.exports={
    ProvinceModel
}