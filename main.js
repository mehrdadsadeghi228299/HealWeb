const express = require('express');
const dotenv  =require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const ejs=require('ejs');
const expressEjsLayouts = require('express-ejs-layouts');
const { NotFoundHandler } = require('./src/common/exception/not-found.handler');
const { AllExceptionHandler } = require('./src/common/exception/all-exception.handler');
const { AllRoutes } = require('./src/routes');
const SwaggerConfig = require('./src/config/swagger.config');
const moment = require('jalali-moment');
const methodOverride = require("method-override");
const winston = require('winston');
const winsnton_mongodb=require('winston-mongodb');
dotenv.config();
/*const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' }),
      new winsnton_mongodb.MongoDB({db:process.env.MONGODB_URL_LOCAL})
    ]
  });
  */
const files = new winston.transports.File({ filename: 'combined.log' });
const console = new winston.transports.Console();


const port=process.env.PORT; 
const cookiesecretekey=process.env.cookiesecretekey;
async function main(){
    const app = express();
 //   require('./src/config/mongoose.config');
    SwaggerConfig(app);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(cookiesecretekey));
    app.set("view engine", "ejs");
    app.set(express.static("public"))
    app.use(methodOverride('_method'));
    app.set("layout","./layout/panel/main.ejs");
    app.use(expressEjsLayouts)
    app.use(AllRoutes);
    app.locals.moment = moment;
    app.use(morgan("dev"));
    NotFoundHandler(app);
    AllExceptionHandler(app);
    app.listen(port,()=>{
        console.log(`server is running on: http://localhost:${port}`);
    });
}

main();