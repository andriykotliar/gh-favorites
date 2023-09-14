import { Box, IconButton, Tooltip } from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectFavorites,
  addToFavorites,
  removeFromFavorites
} from '@/store/slices/favorites/favorites.slice';
import { RepositoryTitle } from './RepositoryTitle';
import { RepositoryArchivedBage } from './RepositoryArchivedBage';
import { RepositoryDataFragment } from '@/__generated__/graphql';

type RepositoryHeaderProps = {
  repository: RepositoryDataFragment;
};

const rootBoxStyle = {
  display: 'flex',
  gap: 2,
  justifyContent: 'space-between',
  alignItems: 'center'
};

const titleBoxStyle = {
  display: 'flex',
  gap: 2,
  alignItems: 'center',
};

const RepositoryHeader: FC<RepositoryHeaderProps> = ({
  repository
}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.find((favRepo) => favRepo.id === repository.id);
  const tooltipTitle = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <Box sx={rootBoxStyle} pb={2}>
      <Box sx={titleBoxStyle}>
        <RepositoryTitle
          url={repository.url}
          title={repository.nameWithOwner}
        />
        <RepositoryArchivedBage
          isArchived={repository.isArchived}
        />
      </Box>
      <Tooltip title={tooltipTitle}>
        {isFavorite ? (
          <IconButton onClick={() => dispatch(removeFromFavorites(repository.id))}>
            <TurnedInIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(addToFavorites(repository))}>
            <TurnedInNotIcon />
          </IconButton>
        )}
      </Tooltip>
    </Box>
  );
};

export { RepositoryHeader };