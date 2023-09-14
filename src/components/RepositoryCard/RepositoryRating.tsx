import { Box, Rating } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectFavorites, updateRating } from '@/store/slices/favorites/favorites.slice';

type RepositoryRatingProps = {
  repoId: string;
};

const RepositoryRating: FC<RepositoryRatingProps> = ({
  repoId
}) => {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const ratingValue = favorites[repoId]?.rating || 0;

  return (
    <Box display="flex" pt={2}>
      <Rating
        value={ratingValue}
        onChange={
          (_, rating) => dispatch(updateRating({
            repoId,
            value: Number(rating),
          }))
        }
      />
    </Box>
  );
};

export { RepositoryRating };