import "./styles.css";
import { Box, Typography } from "@material-ui/core";
import HighAndLow from "./HighAndLow";

export default function App() {
  return (
    <Box className="App">
      <Typography variant="h1">
        <Box className={"h1-header"}>High and Low</Box>
      </Typography>
      <Typography variant="h2">
        <Box className={"h2-header"}>on Codesandbox</Box>
      </Typography>
      <Box id="table">
        <HighAndLow />
      </Box>
    </Box>
  );
}
