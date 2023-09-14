import { FC } from 'react';
import { Typography } from '@mui/material';

type RepositoryArchivedBageProps = {
  isArchived: boolean;
};

const RepositoryArchivedBage: FC<RepositoryArchivedBageProps> = ({
  isArchived
}) => {
  if(!isArchived) {
    return null;
  };

  return (
    <Typography
      variant="caption"
      sx={{
        backgroundColor: '#fbebce',
        lineHeight: 1,
        borderRadius: 50,
        border: '1px solid #b67809',
      }}
      py={0.5}
      px={1}
    >
      Archived
    </Typography>
  );
};

export { RepositoryArchivedBage };