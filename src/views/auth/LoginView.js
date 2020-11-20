import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmitClient = () => {
    navigate('/app/client/dashboard', { replace: true });
  }
  const handleSubmitCommunity = () => {
    navigate('/app/community/dashboard', { replace: true });
  }

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Sign in
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Sign in on the internal platform
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
            >
              <Button
                color="primary"
                fullWidth
                startIcon={<FacebookIcon />}
                onClick={handleSubmitClient}
                size="large"
                variant="contained"
              >
                Login to buy likes
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
            >
              <Button
                color="primary"
                fullWidth
                startIcon={<FacebookIcon />}
                onClick={handleSubmitCommunity}
                size="large"
                variant="contained"
              >
                Login to like and get money
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
