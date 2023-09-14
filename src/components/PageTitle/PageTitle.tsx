import { Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      variant="h1"
      mb={2}
      fontSize={{ xs: '2rem', md: '3rem' }}
    >
      {children}
    </Typography>
  );
};

export { PageTitle };