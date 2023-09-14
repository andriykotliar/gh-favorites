import { FC } from 'react';
import { CircularProgress } from '@mui/material';

type LoaderProps = {
  isLoading: boolean;
};

const Loader: FC<LoaderProps> = ({
  isLoading = false
}) => {
  if(!isLoading) {
    return null;
  }

  return <CircularProgress />;
};

export { Loader };