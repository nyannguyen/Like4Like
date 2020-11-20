import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import data from './data';
import LikeCard from './LikeCard';

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

const LikeList = () => {
  const classes = useStyles();
  const [likeList] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Like To Earn Money"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {likeList.map((data) => (
              <Grid
                item
                key={data.id}
                lg={6}
                md={6}
                xs={12}
              >
                <LikeCard
                  className={classes.productCard}
                  data={data}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default LikeList;
