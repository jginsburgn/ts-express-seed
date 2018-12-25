import express, {
  Express,
  Request,
  Response,
} from "express";
import HttpStatusCodes from "http-status-codes";

const app: Express = express();

app.get("/", (_: Request, res: Response) => {
  res.status(HttpStatusCodes.OK).send();
});

app.use("/static", express.static("static"));

app.listen(3000, "0.0.0.0");