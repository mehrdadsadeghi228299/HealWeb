const winston = require("winston");

function AllExceptionHandler(app) {
    app.use((err, req, res, next) => {
         winston.error(err.message);
        if (typeof err === "string") {
            // custom application error
            return res.status(400).json({ message: err });
          }
          if (err.name === "ValidationError") {
            // mongoose validation error
            return res.status(400).json({ message: err.message });
          }
         
          if (err.name === "UnauthorizedError") {
            // jwt authentication error
            return res.status(401).json({ message: "Invalid Token" });
          }
        
          // default to 500 server error
        let status = err?.status ?? err?.statusCode ?? err?.code;
        if(!status || isNaN(+status) || status > 511 || status < 200) status = 500;
        res.status(status).json({
            message: err?.message ?? err?.stack ?? "InternalServerError"
        });

    })
}
module.exports = {
    AllExceptionHandler
}