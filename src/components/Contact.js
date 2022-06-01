import React from "react";
import { Grid, Typography, TextareaAutosize, Button } from "@mui/material";
import contactImage from "../assets/amico.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography variant="h3" gutterBottom component="div">
              <text className="hometitle">Contact Us</text>
            </Typography>
            <br></br>
            <div className="contactimage">
              <img
                src={contactImage}
                alt="contact-us"
                width={400}
                height={450}
              />
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <div>
            <br />
            <Typography variant="h6" gutterBottom component="div">
              <text className="hometitle">
                Have any questions? We're happy to answer them!
              </text>
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <br></br>
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Organisation"
                variant="outlined"
              />
              <br></br>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message"
                style={{ width: 512, height: 200 }}
              />
              <br />
              <Button variant="contained" size="medium" style={{ width: 512 }}>
                Submit
              </Button>
            </Box>
          </div>
        </Grid>
      </div>
    </section>
  );
}

export default Contact;
