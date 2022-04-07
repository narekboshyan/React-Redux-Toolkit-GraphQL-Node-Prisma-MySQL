import React from 'react';
import { makeStyles } from '@material-ui/core';
import { GRAY_COLOR, LIGHT_BLUE_COLOR } from 'constants/colors';

const useStyles = makeStyles({
  circularLoadingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularLoading: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    border: `2px solid ${GRAY_COLOR}`,
    borderTopColor: LIGHT_BLUE_COLOR,
    animation: '$rotate 2s linear infinite',
  },
  '@keyframes rotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

const CircularLoadingSmall = () => {
  const classes = useStyles();

  return (
    <div className={classes.circularLoadingContainer}>
      <div className={classes.circularLoading} />
    </div>
  );
};

export default CircularLoadingSmall;
