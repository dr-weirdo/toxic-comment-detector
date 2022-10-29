import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { publicRequest } from "./requestMethods";

const App = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [showProgress, setShowProgress] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(text);
    setShowProgress(true);
    setResult("");
    if (text !== "") {
      try {
        const data = JSON.stringify({ input: text });
        console.log(data);
        const res = await publicRequest.get(`/run-pyscript/${data}`);
        console.log("res.data: ", res.data);
        setResult(res.data.output);
        setShowProgress(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Container>
        <Box
          component="form"
          autoComplete="off"
          noValidate
          alignItems="center"
          justifyContent="center"
          marginX={20}
        >
          <Typography variant="h4" marginY={5}>Toxic Comment Detector</Typography>
          <TextField
            fullWidth
            placeholder="Write something here..."
            rows={3}
            multiline
            onChange={(e) => {
              console.log(text);
              setText(e.target.value);
            }}
          />
          <Button variant="contained" sx={{marginTop: 3}} onClick={handleClick}>
            Check
          </Button>
          {result !== "" && <Typography variant="h5" marginY={5}>{"Tag(s): "+result}</Typography>}
          {showProgress && (
            <>
              <Typography variant="h5" marginY={5}>Predicting Toxicity... </Typography>
              <LinearProgress />
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default App;
