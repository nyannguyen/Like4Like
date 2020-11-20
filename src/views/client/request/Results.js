import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {removeRequest} from 'src/redux/actions/Request';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Post URL
                </TableCell>
                <TableCell>
                  Cost per like
                </TableCell>
                <TableCell>
                  Buget
                </TableCell>
                <TableCell>
                  Current likes count
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((request,index) => (
                <TableRow
                  hover
                  key={request.id}
                >
                  <TableCell>
                    {request.url}
                  </TableCell>
                  <TableCell>
                    {request.value}
                  </TableCell>
                  <TableCell>
                    {request.buget}
                  </TableCell>
                  <TableCell>
                    {request.totalLike}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
