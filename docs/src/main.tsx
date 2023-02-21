import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


ReactDOM.render(
  <React.StrictMode>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

