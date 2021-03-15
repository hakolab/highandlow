import React from "react";
import { Box, Grid } from "@material-ui/core";
import Card from "./Card";
import { useStyles } from "../hooks/useStyles";

export default function PlayArea(props) {
  const classes = useStyles();
  return (
    <Box className={classes.playArea}>
      <Grid container direction="row" spacing={2} alignItems="center" justify="center">
        <Grid item>
          <Card card={props.firstCard}></Card>
        </Grid>
        <Grid item>
          <Card card={props.secondCard}></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
