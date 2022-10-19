const cors = require("cors");
const { spawn } = require("child_process");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.get("/run-pyscript", (req, res) => {
  var str = "meow";
  let output;

  const python = spawn("python3", ["pyscripts/script.py", str]);
  python.stdout.on("data", (data) => {
    console.log("Piping data from python script...");
    console.log(data.toString());
    output = data.toString();
  });
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.json({ output: output });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running @${PORT}`);
});
