const { model, Types ,Schema} = require('mongoose');

const CompetitionsSchema = new Schema({
    titleCompetitions:{type:String , required:true},
    nameVolunter:{type:String , required:true},
    informationofVolunter:{type:Object,required:false},
    description:{type:String , required:true},
    images:{type:[String] , required:true},
    cityname:{type:String , required:true},
    city:{type:Types.ObjectId,required:false,ref:'citymodel'},
    wnier:{type:Boolean,required:false},
    whoSetWinner:{type:Types.ObjectId,required:false,ref:"Person"}
},{
    timestamps:true
});

const CompetitionsModel = model("Competitions", CompetitionsSchema);

module.exports = {
    CompetitionsModel
}