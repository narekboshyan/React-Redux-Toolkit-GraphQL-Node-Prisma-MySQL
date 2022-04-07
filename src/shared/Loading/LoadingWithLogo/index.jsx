import React from 'react';
import { ReactComponent as DesktopLogo } from 'assets/img/icons/landing/buildern_desktop_logo.svg';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { FETCH_LOADING_TEXT } from 'constants/common';

const useStyles = makeStyles({
  loadingWrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'translateY(-10%)',
    fontSize: 20,
    fontWeight: 500,
  },
  circularProgress: {
    marginTop: 30,
  },
});

const LoadingWithLogo = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingWrapper}>
      <div className={classes.loadingBox}>
        <DesktopLogo />
        <CircularProgress className={classes.circularProgress} />
        {FETCH_LOADING_TEXT}
      </div>
    </div>
  );
};

export default LoadingWithLogo;
