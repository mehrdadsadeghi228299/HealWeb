const mongoose= require('mongoose');

const SaharTeam =new Schema({
    name:{type:[String], required:true},
    day:{type:Date, required:true}
});
const SahabTeam = new Schema({
    countWomen:{type:String, required:true},
    countMen:{type:String, required:true},
    countPP:{type:Number, required:true},
    countPR:{type:Number, required:true},
    count:{type:String, required:true},
    day:{type:Date, required:true}
});
const ProvinceObjectParametersSchema = new mongoose.Schema({
    province:{type:mongoose.Types.ObjectId,required:true,ref:"Province"},
    city:{type:mongoose.Types.ObjectId,required:true,ref:"city"},
    user:{type:mongoose.Types.ObjectId,required:true,ref:"person"},
    SahabTeam:{type:mongoose.Types.ObjectId,required:false,ref:"SahabTeam"},
    SahabTeam:{type:mongoose.Types.ObjectId,required:false,ref:"SaharTeam"},
    date:{type:Date,required:true},
    SaharTeamCity:{type:SaharTeam,required:false},
    SahabTeamCity:{type:SahabTeam,required:false},
    volunter:{type:[String] , required:false},
    personel:{type:[String] , required:false},
    num1:{type:Number,required:true},
    num2:{type:Number,required:true},
    num3:{type:Number,required:true},
    num4:{type:Number,required:true},
    num5:{type:Number,required:true},
    num6:{type:Number,required:true},
    num7:{type:Number,required:true},
    num8:{type:Number,required:true},
    num9:{type:Number,required:true},
    s:[{
        name:String,
        date:Date
    }],
    b:[{
        countWomen:{type:Number, required:true},
        countMen:{type:Number, required:true},
        countPP:{type:Number, required:true},
        countPR:{type:Number, required:true},
        count:{type:Number, required:true},
        day:{type:Date, required:true}
     }]
 });

const SahabTeamModel=mongoose.model("SahabTeam",SahabTeam);
const SaharTeamModel=mongoose.model("SaharTeam",SaharTeam);
const provinceParametersModel = mongoose.model( "provinceParameters" , ProvinceObjectParametersSchema );

module.exports={
    provinceParametersModel
}