const { default: mongoose } = require("mongoose");
require("dotenv").config();

const AtlasURL=process.env.MONGODB_URL;
try {
    mongoose.connect(AtlasURL).then(result=>{
        console.log('connection to mongodb Atlas ');
    
    });
    mongoose.connection.on("connected", () => {
        console.log("mongoose connected to DB");
      });

      mongoose.connection.on("disconnected", () => {
        console.log("mongoose connection is disconnected");
      });
    
} catch (error) {
    console.log("Failed DB connection to Atlas ",error);
    
}