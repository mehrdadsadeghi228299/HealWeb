
const {model, Types ,Schema} = require('mongoose');

const OTPSchema = new Schema({
    code: {type: String, required: false, default: undefined},
    expiresIn: {type: Number, required: false, default: 0},

});

const PersonSchema = new Schema({
    name:{type:String ,require:true},
    lastName:{type:String ,require:true},
    personlId:{type:String ,require:true}, 
    password:{type:String ,require:true},
    codeMeeli:{type:Number ,require:true},
    mobile:{type:String ,require:true},
    isActive:{type:[String] ,require:false},
    roll:{type:String ,enum:['admin','creator','normal'], require:true,default:"admin"},
    howCreatedUser:{type:String , require:false},
    descriptionForupdate:{type:String, require:false},
    province:{type:String , require:true},
    subProvince:{type:String , require:false},
    accessLevel:{type:String ,enum:['one','two','there'],require:true,default:'one'},
    email:{type:String , required:false},
    CityId:{type:String, required:false, default: undefined,ref:'City'},
    otpMobile: {type: OTPSchema}
}
,{
    timestamps:true
});

const PersonModel = model("Person", PersonSchema);
module.exports = {
    PersonModel
}