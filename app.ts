import * as express from "express";
import ApiError from "./CustomError";
import log from "./logger";
import router from'./routes';

const app = express();

function errorCatcher(err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!err) return next();
    else {
      log(err);
  
      res.status(err.statusCode || 500).json({
        message: err.message || 'Unexpected Server Error'
      });
    }
  }

app.use(router);
// ALWAYS USE LAST OR IT WON'T WORKS
app.use(errorCatcher);

export default app;