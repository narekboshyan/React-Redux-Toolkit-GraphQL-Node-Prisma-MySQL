/* eslint-disable */
import { makeStyles, Snackbar } from '@material-ui/core';
import {
  DARK_BLUE_COLOR,
  DARK_GREEN_COLOR,
  DARK_RED_COLOR,
  LIGHT_GREEN_COLOR,
  LIGHT_RED_COLOR,
} from 'constants/colors';
import { SNACKBAR_TYPE } from 'constants/common';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseIcon } from 'assets/img/close_icon.svg';
import { ReactComponent as SuccessIcon } from 'assets/img/check-circle-success.svg';
import { ReactComponent as ErrorIcon } from 'assets/img/warning.svg';
import { SNACKBAR_HEIGHT } from 'constants/layout';
import IconButton from '../Button/IconButton';
import { removeSnackbar } from 'redux/slices/shared';

const useStyles = makeStyles({
  snackbarRoot: {
    backgroundColor: ({ type }) => {
      switch (type) {
        case SNACKBAR_TYPE.success: {
          return LIGHT_GREEN_COLOR;
        }
        case SNACKBAR_TYPE.error: {
          return LIGHT_RED_COLOR;
        }
        default: {
          return LIGHT_GREEN_COLOR;
        }
      }
    },
    borderColor: ({ type }) => {
      switch (type) {
        case SNACKBAR_TYPE.success: {
          return DARK_GREEN_COLOR;
        }
        case SNACKBAR_TYPE.error: {
          return DARK_RED_COLOR;
        }
        default: {
          return DARK_GREEN_COLOR;
        }
      }
    },
    bottom: ({ index }) => index * SNACKBAR_HEIGHT + 24 + index * 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    boxShadow: '0px 6px 18px rgba(8, 35, 48, 0.12)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 12px',
    height: SNACKBAR_HEIGHT,
    width: 436,
    boxSizing: 'border-box',
  },
  snackbarMessage: {
    fontSize: 14,
    color: DARK_BLUE_COLOR,
    flex: 1,
  },
});

const SnackbarItem = ({ message, type, id, index }) => {
  const dispatch = useDispatch();
  const classes = useStyles({ type, index });
  const handleClose = (e, reason) => {
    if (reason !== 'clickaway') {
      dispatch(removeSnackbar(id));
    }
  };
  const getSnackbarIcon = () => {
    switch (type) {
      case SNACKBAR_TYPE.success: {
        return <SuccessIcon />;
      }
      case SNACKBAR_TYPE.error: {
        return <ErrorIcon />;
      }
      default: {
        return <SuccessIcon />;
      }
    }
  };
  return (
    <Snackbar
      transitionDuration={0}
      className={classes.snackbarRoot}
      open={!!message}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
    >
      <>
        <IconButton icon={getSnackbarIcon()} />
        <div data-cy="snackbarMessage" className={classes.snackbarMessage}>
          {message}
        </div>
        <IconButton icon={<CloseIcon />} onClick={handleClose} />
      </>
    </Snackbar>
  );
};

export default SnackbarItem;
