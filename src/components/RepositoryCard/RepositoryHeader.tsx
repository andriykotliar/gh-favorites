import { Box, IconButton, Tooltip } from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectFavorites, updateFavorites } from '@/store/slices/favorites/favorites.slice';
import { RepositoryTitle } from './RepositoryTitle';
import { RepositoryArchivedBage } from './RepositoryArchivedBage';

type RepositoryHeaderProps = {
  repoId: string;
  url: string;
  title: string;
  isRepoArchived: boolean;
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
  repoId,
  url,
  title,
  isRepoArchived,
}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const tooltipTitle = favorites[repoId] ? 'Remove from favorites' : 'Add to favorites';

  return (
    <Box sx={rootBoxStyle} pb={2}>
      <Box sx={titleBoxStyle}>
        <RepositoryTitle
          url={url}
          title={title}
        />
        <RepositoryArchivedBage
          isArchived={isRepoArchived}
        />
      </Box>
      <Tooltip title={tooltipTitle}>
        <IconButton onClick={() => dispatch(updateFavorites(repoId))}>
          {favorites[repoId] ? (
            <TurnedInIcon color="primary" />
          ) : (
            <TurnedInNotIcon />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export { RepositoryHeader };