const express = require('express');
const dotenv  =require('dotenv');
const { swaggerConfig } = require('./SRC/config/swagger.confige');
const morgan = require('morgan');
const {Allrouter}=require('./SRC/routers/routers')
const { Notfoud, InternalErrorNotFound } = require('./SRC/common/execption/errorHandel');
const cookieParser = require('cookie-parser');
const ejs=require('ejs');
const expressEjsLayouts = require('express-ejs-layouts');
dotenv.config();
const port=process.env.PORT;
async function main(){
    const app = express();
    require('./SRC/config/mongoose.config');
    swaggerConfig(app);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser("cookiesecretekey"));
    app.set("view engine", "ejs");
    app.set(express.static("public"))
    app.set("layout","./layout/panel/main.ejs");
    app.use(expressEjsLayouts)

    app.use(Allrouter);
    app.use(morgan("dev"));
    Notfoud(app);

    InternalErrorNotFound(app);
    app.listen(port,()=>{
        console.log(`server is running on: http://localhost:${port}`);
    });
}

main();