import React, { useState } from 'react';
import {
  Box,
    Button,
    Card,
    CardContent,
    CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useDispatch } from 'react-redux';
import { addRequest } from 'src/redux/actions/Request';
import { useNavigate } from 'react-router-dom';

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

const NewRequest = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    id: 0,
    userId: '',
    url: "",
    value: 0,
    type: "",
    totalLike: 0,
    buget: 0
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });

    setValues((oldValues) => {
      return({
        ...oldValues,
        id: oldValues.url.substring(oldValues.url.lastIndexOf('/') + 1),
        type: oldValues.url.includes("post")?"post":"page"
      })
    })
  };

  const handleSubmit = () => {
    dispatch(addRequest(values));
    navigate('../', { replace: true });
  }

  return (
    <Page
      className={classes.root}
      title="New Like Project"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
              <Grid item xs={12}>
                <form
                    autoComplete="off"
                    noValidate
                    >
                    <Card>
                        <CardHeader
                        title="New Like Project"
                        />
                        <Divider />
                        <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                            item
                            xs={12}
                            >
                            <TextField
                                fullWidth
                                helperText="Post URL"
                                label="Post URL"
                                name="url"
                                required
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                helperText="Cost per like"
                                label="Cost per like"
                                name="value"
                                required
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                helperText="Owner ID"
                                label="Owner ID"
                                name="userId"
                                required
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                helperText="Buget"
                                label="Buget"
                                name="buget"
                                required
                                onChange={handleChange}
                                variant="outlined"
                            />
                            </Grid>
                        </Grid>
                        </CardContent>
                        <Divider />
                        <Box
                        display="flex"
                        justifyContent="flex-end"
                        p={2}
                        >
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Save details
                        </Button>
                        </Box>
                    </Card>
                    </form>
              </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default NewRequest;
