import React from 'react';
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { useStyles } from './useStyles'
import { cards } from './variables'

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        EMS Adiraja Integrasi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Landing() {
  const classes = useStyles();
  const history = useHistory()

  const goPage = (path) => {
    window.open(path); 
  }

  const goSignView = (view) => {
    if(view === 'signin') {
      history.push("/signin")
    }
    if(view === 'signup') {
      history.push("/signup")
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography color="secondary" component="h1" variant="h2" align="center" gutterBottom>
              <Box fontWeight={500}>
                EMS
              </Box> 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
               <b>Enterprise Mine Market</b> integration, build solution for business in the long-run
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={() => goSignView('signup')} variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => goSignView('signin')} variant="outlined" color="primary">
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imgsrc}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.subheading}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => goPage(card.path)} size="small" color="primary">
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
          <b>EMS</b> Paramitra consulting company
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Technology only lives a short life, but commitment and trust will last as long as we do the right thing to foster them
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}