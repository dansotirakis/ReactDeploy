import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { EstablishmentToolbar, EstablishmentTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [establishment] = useState(mockData);

  return (
    <div className={classes.root}>
      <EstablishmentToolbar />
      <div className={classes.content}>
        <EstablishmentTable users={establishment} />
      </div>
    </div>
  );
};

export default UserList;
