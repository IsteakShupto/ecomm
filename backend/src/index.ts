import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: `App started successfully at port ${port}`,
  });
});

app.listen(port, () => {
  console.log(`Server has started successfully on port ${port}`);
});
