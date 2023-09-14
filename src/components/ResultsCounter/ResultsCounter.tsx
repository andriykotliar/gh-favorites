import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type ResultsCounterProps = {
  count?: number;
  title: string;
};

const ResultsCounter: FC<ResultsCounterProps> = ({
  count = 0,
  title
}) => {
  return (
    <Box pb={2}>
      <Typography variant="subtitle1">
        {title}: <b>{count.toLocaleString()}</b>
      </Typography>
    </Box>
  );
};

export { ResultsCounter };