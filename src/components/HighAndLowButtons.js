import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";

export default function HighAndLowButtons(props) {
  useEffect(() => {
    function click(event) {
      switch (event.key) {
        case "h":
          props.onClickHigh();
          break;
        case "l":
          props.onClickLow();
          break;
        default:
          break;
      }
    }
    document.body.addEventListener("keydown", click, {
      passive: false
    });
    return () => {
      document.body.removeEventListener("keydown", click, {
        passive: false
      });
    };
    // マウント時にのみ呼び出したいため、 Missing dependencies の警告を抑制
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" mt={1}>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickHigh}>
          HIGH
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickLow}>
          LOW
        </Button>
      </Box>
    </Box>
  );
}
