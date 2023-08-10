import express, { Express, Request, Response} from "express";
import "dotenv/config";
const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: "Welcome to revou",
    data: [
      {
        id: 1,
        title: "title 1",
      },
    ],
  });
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
