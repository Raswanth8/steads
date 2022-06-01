import React from "react";
import { Grid, Typography } from "@mui/material";
export default function Home() {
  return (
    <section id="home" className="home-section">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <div className="homebanner">
            <Typography variant="h3" gutterBottom component="div">
              <text className="hometitle">STeAdS Virtual Group</text>
            </Typography>

            <br></br>
            <p className="homecontent">
              A virtual group which aims to use Software engineering practices
              and Technological advancements for the benefit of various aspects
              of the society including Healthcare, Education, Art and Culture.
            </p>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="imagebanner">
            <img
              src="https://img.freepik.com/free-vector/back-school-books-education-research-illustration_1893-2635.jpg"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
