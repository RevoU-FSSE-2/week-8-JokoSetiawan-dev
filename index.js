import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome",
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
