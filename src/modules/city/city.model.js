const { model, Types ,Schema} = require('mongoose');

const CitySchema = new Schema({
    title:{type:String , require:true},
    name:{type:String , require:true,uniqe:true},
    description:{type:String , require:true},
    lat:{type:String , require:true},
    lng:{type:String , require:true},
    key:{type:Number , required:true},
    paramters:{type:Types.ObjectId , required:false,ref:'provinceParameters'},

});

const CityModel = model("City", CitySchema);

module.exports = {
    CityModel
}