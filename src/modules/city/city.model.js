const { model, Types ,Schema} = require('mongoose');
const SaharTeam=new Schema({
    name:{type:String, required:true},
    day:{type:Date, required:true}
});

const CitySchema = new Schema({
    title:{type:String , require:true},
    name:{type:String , require:true},
    description:{type:String , require:true},
    lat:{type:String , require:true},
    lng:{type:String , require:true},
    key:{type:Number , required:true},
    paramters:{type:Object , required:true},
    SaharTeamCity:{type:[SaharTeam],required:false}
});

const CityModel = model("City", CitySchema);

module.exports = {
    CityModel
}