import React from "react";
import { Card as MuiCard, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "140px",
    height: "200px"
  },
  content: {
    width: "100%",
    height: "100%"
  },
  top: {
    height: "30px",
    marginLeft: "10px"
  },
  middle: {
    fontSize: "30px",
    height: "140px",
    lineHeight: "140px"
  },
  bottom: {
    height: "30px",
    marginRight: "10px"
  }
});

export default function Card(props) {
  const classes = useStyles();
  const topAndBottom =
    props.card === null ? "?" : props.card.suit + props.card.rank;
  const middle = props.card === null ? "?" : props.card.suit;
  return (
    <MuiCard className={classes.root}>
      <Box className={classes.content} display="flex" flexDirection="column">
        <Box className={classes.top} alignSelf="flex-start">
          {topAndBottom}
        </Box>
        <Box className={classes.middle}>{middle}</Box>
        <Box className={classes.bottom} alignSelf="flex-end">
          {topAndBottom}
        </Box>
      </Box>
    </MuiCard>
  );
}
