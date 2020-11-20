import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RequestListView = () => {
  const classes = useStyles();
  const [data] = useState(useSelector(state => state.Request));

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Box>
          <Button component={RouterLink} to="./new" variant="contained">Create new request</Button>
        </Box>
        <Box mt={3}>
          <Results data={data} />
        </Box>
      </Container>
    </Page>
  );
};

export default RequestListView;
