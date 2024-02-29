const mongoose= require('mongoose');


const ProvinceObjectParametersSchema = new mongoose.Schema({
    province:{type:String,required:true},
    city:{type:String,required:true},
    date:{type:Date,required:true},
    num1:{type:Number,required:true},
    num2:{type:Number,required:true},
    num3:{type:Number,required:true},
    num4:{type:Number,required:true},
    num5:{type:Number,required:true},
    num6:{type:Number,required:true},
    num7:{type:Number,required:true},
    num8:{type:Number,required:true},
    num9:{type:Number,required:true},
});


const provinceParametersModel = mongoose.model( "provinceParameters" , ProvinceObjectParametersSchema );

module.exports={
    provinceParametersModel
}