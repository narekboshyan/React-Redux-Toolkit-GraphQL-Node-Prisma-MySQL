/*eslint-disable */
import React from 'react';
import Routes from './Routes';
import { useSelector } from 'react-redux';
import SharedSnackbar from 'shared/Snackbar/SnackbarList';
import CircularLoading from 'shared/Loading/CircularLoading';

const App = () => {
  const { loading } = useSelector((state) => state.common);

  console.log(loading.text, loading.open, 'loading');
  return (
    <div>
      <SharedSnackbar />
      <CircularLoading open={loading.open} />
      <Routes />
    </div>
  );
};

export default App;
