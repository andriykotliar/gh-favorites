import { FC } from 'react';
import { Box } from '@mui/material';
import { RepositoryDataFragment } from '@/__generated__/graphql';
import { RepositoryCard } from '../RepositoryCard';

type RepositoriesListProps = {
  nodes?: RepositoryDataFragment[];
  showRating?: boolean;
};

const listBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const RepositoriesList: FC<RepositoriesListProps> = ({
  nodes,
  showRating
}) => {
  if(!nodes || nodes.length === 0) {
    return null;
  };

  return (
    <Box sx={listBoxStyles}>
      {nodes.map((node) => (
        <RepositoryCard repository={node} key={node.id} showRating={showRating} />
      ))}
    </Box>
  );
};

export { RepositoriesList };