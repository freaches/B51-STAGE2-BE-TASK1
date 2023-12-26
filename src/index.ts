import { AppDataSource } from "./data-source";
import * as express from "express";
import router from "./route";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(express.json());
    app.use("/api/data", router);

    app.listen(5000, () => console.log("server running"));
  })
  .catch((error) => console.log(error));
