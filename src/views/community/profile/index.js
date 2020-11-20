import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
              <Grid item xs={12}>
                <ProfileDetails />
              </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default Profile;
