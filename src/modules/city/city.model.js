
const { model, Types ,Schema} = require('mongoose');


const CitySchema = new Schema({

    title:{type:String , require:true},
    name:{type:String , require:true},
    description:{type:String , require:true},
    lat:{type:String , require:true},
    lng:{type:String , require:true},
    key:{type:Number , required:true},

});

const CityModel = model("City", CitySchema);

module.exports = {

    CityModel

}