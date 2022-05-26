import express from "express";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import db from "./config/db";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./documentation/swagger.json";
import CustomError from "./util/error/CustomError";
import "express-async-errors";
import routes from "./routes/routes";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);
app.use(
  (error: Error | any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof CustomError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
);
(async () => {
  try {
    const port = process.env.PORT || 3000;
    await db.sync();
    app.listen(port, () => {
      console.log("server on port ", port);
    });
  } catch (error) {
    console.log(error);
  }
})();
