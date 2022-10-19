const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.listen(5000, () => {
  console.log("Backend server running...");
});
