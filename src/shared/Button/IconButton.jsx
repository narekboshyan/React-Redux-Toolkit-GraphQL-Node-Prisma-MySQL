import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    minWidth: 'unset',
  },
});
const IconButton = ({ icon, className = '', actionName, ...rest }) => {
  const classes = useStyles();
  if (actionName) {
    return null;
  }
  return (
    <Button className={`${classes.root} ${className}`} {...rest}>
      {icon}
    </Button>
  );
};

export default IconButton;
