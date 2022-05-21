import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

export default function Team() {
  return (
    <div className="teamsection">
      <div className="aboutcards">
        <br />
        <p className="abouttitle">
          <b>Meet our team</b>
        </p>
        <br />
        <Box sx={{ flexGrow: 10 }}>
          <Grid container spacing={5} columns={1}>
            <Grid item xs={5.3}>
              <Card sx={{ maxWidth: 345 }} elevation={2}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                  alt="profilepicture"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <text>
                      {" "}
                      <b>Lorem Ipsum</b>
                    </text>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </text>
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <IconButton aria-label="linkedin" size="large">
                    <LinkedInIcon fontSize="inherit" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <br></br>

        <p className="abouttitle">
          <b>Reasearchers</b>
        </p>
        <br />
        <div className="teamcard2">
          <Box sx={{ flexGrow: 10 }}>
            <Grid container spacing={5} columns={16.2}>
              <Grid item xs={5.3}>
                <Card sx={{ maxWidth: 350 }} elevation={2}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                    alt="profilepicture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <text>
                        {" "}
                        <b>Lorem Ipsum</b>
                      </text>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </text>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <IconButton aria-label="linkedin" size="large">
                      <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={5.3}>
                <Card sx={{ maxWidth: 350 }} elevation={2}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                    alt="profilepicture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <text>
                        {" "}
                        <b>Lorem Ipsum</b>
                      </text>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </text>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <IconButton aria-label="linkedin" size="large">
                      <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={5.3}>
                <Card sx={{ maxWidth: 350 }} elevation={2}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                    alt="profilepicture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <text>
                        {" "}
                        <b>Lorem Ipsum</b>
                      </text>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </text>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <IconButton aria-label="linkedin" size="large">
                      <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
