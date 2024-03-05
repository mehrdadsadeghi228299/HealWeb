const { model, Types ,Schema} = require('mongoose');

const CitySchema = new Schema({
    title:{type:String , required:true},
    name:{type:String , required:true,uniqe:true},
    description:{type:String , required:true},
    lat:{type:String , required:true},
    lng:{type:String , required:true},
    key:{type:Number , required:true},
    paramters:{type:[Types.ObjectId],required:false,ref:'provinceParameters'},

},{
    timestamps:true
});

const CityModel = model("citymodel", CitySchema);

module.exports = {
    CityModel
}