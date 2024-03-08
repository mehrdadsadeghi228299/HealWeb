const {  Types ,Schema, model} = require('mongoose');

const provinceParametersWithDate= new Schema({
    provinceParameters:{type:Types.ObjectId,required:true,ref:'provinceParameters'},
    date:{type:Date}
});
const ProvinceSchema = new Schema({
    name:{type:String,required:true,uniqe:true},
    owner:{type:String,required:true},
    count:{type:Number,required:false},
    men:{type:[String],required:true},   
    city:{type:[Types.ObjectId],required:true,ref:'citymodel',uniqe:true},
    provinceParameters:{type:[Types.ObjectId],require:false,ref:'provinceParameters',uniqe:true},
    provinceParametersConfirmation:{type:[Types.ObjectId],require:false,ref:'provinceParameters'},

},{
    timestamps:true
});


const ProvinceModel = model( "province" , ProvinceSchema );

module.exports={
    ProvinceModel
}