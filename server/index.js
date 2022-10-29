const cors = require("cors");
const { spawn } = require("child_process");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.get("/run-pyscript/:text", (req, res) => {
  console.log(req.body);
  var temp = req.params.text;
  console.log(temp);
  let str = JSON.parse(temp);
  str = str.input;
  console.log(str);
  let output;
  const python = spawn(".pyvenv/bin/python3", ["pyscripts/script.py", str]);
  python.stdout.on("data", (data) => {
    console.log("Piping data from python script...");
    console.log(data.toString());
    output = data.toString();
  });
  python.on("close", (code) => {
    console.log(`child process: close all stdio with code ${code}`);
    res.json({ output: output });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running @${PORT}`);
});
