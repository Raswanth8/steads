import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-section">
        <br />
        <p className="abouttitle">
          <b>S</b>oftware Engineering and <b>Te</b>chnological <b>A</b>
          dvancements for <b>S</b>ociety
        </p>
        <br></br>
        <div className="aboutcards">
          <br />
          <Box sx={{ flexGrow: 10 }}>
            <Grid container spacing={5} columns={17}>
              <Grid item xs={5.5}>
                <Card sx={{ maxWidth: 300, height: 200 }} elevation={2}>
                  <CardContent>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      <text>
                        <b>S</b>oftware Engineering
                      </text>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "text.secondary" }}
                      variant="body2"
                    >
                      Agile, DevOps, Project Management
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5.5}>
                <Card sx={{ maxWidth: 300, height: 200 }} elevation={2}>
                  <CardContent>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      <text>
                        <b>Te</b>chnological <b>Ad</b>vancements
                      </text>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "text.secondary" }}
                      variant="body2"
                    >
                      Cloud Computing, Artificial Intelligence (EdgeAI, Game
                      Theory, ML/DL/RL)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5.5}>
                <Card sx={{ maxWidth: 300, height: 200 }} elevation={2}>
                  <CardContent>
                    <Typography sx={{ fontSize: 24 }} gutterBottom>
                      <text>
                        <b>S</b>ociety
                      </text>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "text.secondary" }}
                      variant="body2"
                    >
                      Healthcare, Education, Art and Culture
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
        <br></br>
      </div>
    </section>
  );
}
