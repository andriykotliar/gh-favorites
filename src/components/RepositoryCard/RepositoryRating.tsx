import { Box, Rating } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '@/store';
import { updateRating } from '@/store/slices/favorites/favorites.slice';

type RepositoryRatingProps = {
  repoId: string;
  rating?: number;
};

const RepositoryRating: FC<RepositoryRatingProps> = ({
  repoId,
  rating = 0
}) => {
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" pt={2}>
      <Rating
        value={rating}
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