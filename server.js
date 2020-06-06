const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "Ravi Prakash node server running",
  });
});

app.listen("3000", () => {
  console.log(`server is runing at 3000`);
});
