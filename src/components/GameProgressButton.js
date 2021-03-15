import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";

export default function GameProgressButton(props) {
  useEffect(() => {
    function click(event) {
      if (event.key === "Enter") {
        props.onClickNext();
      } else if (!props.isTheLatGame && event.key === "n") {
        props.onClickNext();
      } else if (props.isTheLatGame && event.key === "f") {
        props.onClickNext();
      } else {
        event.preventDefault();
      }
    }
    document.body.addEventListener("keydown", click, {
      passive: true
    });
    return () => {
      document.body.removeEventListener("keydown", click, {
        passive: true
      });
    };
    // マウント時にのみ呼び出したいため、 Missing dependencies の警告を抑制
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mt={1}>
      <Button variant="contained" onClick={props.onClickNext}>
        {props.isTheLatGame ? "FINISH" : "NEXT"}
      </Button>
    </Box>
  );
}
