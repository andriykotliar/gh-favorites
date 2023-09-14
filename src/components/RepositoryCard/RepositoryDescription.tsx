import { FC } from 'react';
import DOMPurify from 'dompurify';
import { Typography } from '@mui/material';

type RepositoryDescriptionProps = {
  description: string;
};

const RepositoryDescription: FC<RepositoryDescriptionProps> = ({
  description
}) => {
  return (
    <Typography
      component="div"
      fontSize={{ xs: '0.8rem', md: '1rem' }}
    >
      <div  
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />
    </Typography>
  );
};

export { RepositoryDescription };