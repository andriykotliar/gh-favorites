import { FC } from 'react';
import { LoadingButton } from '@mui/lab';

type LoadMoreButtonProps = {
  isLoading: boolean;
  onClick: VoidFunction;
};

const LoadMoreButton: FC<LoadMoreButtonProps> = ({
  isLoading,
  onClick
}) => {
  return (
    <LoadingButton
      loading={isLoading}
      variant="contained"
      onClick={onClick}
    >
      Load more results
    </LoadingButton>
  );
};

export { LoadMoreButton };