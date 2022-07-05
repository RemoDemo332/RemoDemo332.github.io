import React from "react";
import "./Barrels.css";
import Grid from "@mui/material/Grid";
import JobTableInactive from "../components/JobTableInactive";

const Barrels = () => {
  return (
    <div className="columnContainer">
      <Grid container spacing={8} columns={27}>
        <Grid item xs={3}>
          <div id="individualCol">
            <h2 id="colHeader">Machine #</h2>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div id="individualCol">
            <h2 id="colHeader">At Bat</h2>
            <JobTableInactive />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div id="individualCol">
            <h2 id="colHeader">On Deck</h2>
            <JobTableInactive />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div id="individualCol">
            <h2 id="colHeader">In the Hole</h2>
            <JobTableInactive />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Barrels;
