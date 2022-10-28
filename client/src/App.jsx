import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
const App = () => {
  const [result, setResult] = useState("");
  const handleClick = () => {
    setResult("Clicked");
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
          <Typography variant="h4">Toxic Comment Detector</Typography>
          <TextField
            id="comment"
            fullWidth
            placeholder="Write something here..."
            rows={3}
            multiline
          />
          <Button variant="contained" onClick={handleClick}>
            Check
          </Button>
          {result !== "" && <Typography>{result}</Typography>}
        </Box>
      </Container>
    </>
  );
};

export default App;
