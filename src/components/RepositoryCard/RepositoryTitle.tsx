import { FC } from 'react';
import { Link, Typography } from '@mui/material';

type RepositoryTitleProps = {
  title: string;
  url: string;
};

const RepositoryTitle: FC<RepositoryTitleProps> = ({
  title,
  url
}) => {
  return (
    <Typography variant="h5" fontSize={{ xs: '1.2rem', md: '1.5rem' }}>
      <Link href={url} underline="hover" target="_blank">
        {title}
      </Link>
    </Typography>
  );
};

export { RepositoryTitle };