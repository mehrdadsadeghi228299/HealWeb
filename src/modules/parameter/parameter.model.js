const {Types,Schema,model}= require('mongoose');

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
const ProvinceObjectParametersSchema = new Schema({
    province:{type:Types.ObjectId,required:true,ref:'province'},
    city:{type:Types.ObjectId,required:true,ref:'citymodel'},
    user:{type:Types.ObjectId,required:true,ref:'Person'},
    isConfirmation:{type:Boolean,required:false,default:false},
    whoConfirmation:{type:Types.ObjectId,required:false,ref:'Person'},
    volunter:{type:[String] },
    personel:{type:[String]  },
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
    }],
    b:[{
        countWomen:Number,
        countMen:Number,
        countPP:Number,
        countPR:Number,
        count:Number,
        day:Date,
     }]

 },{
    timestamps:true

 });

//const SahabTeamModel=mongoose.model("SahabTeam",SahabTeam);
//const SaharTeamModel=mongoose.model("SaharTeam",SaharTeam);
const ParametersModel = model( "provinceParameters" , ProvinceObjectParametersSchema );

module.exports={
    ParametersModel
}