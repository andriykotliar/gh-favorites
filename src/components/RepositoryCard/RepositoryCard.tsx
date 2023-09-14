import { FC } from 'react';
import { Card, CardContent } from '@mui/material';
import { RepositoryHeader } from './RepositoryHeader';
import { RepositoryDescription } from './RepositoryDescription';
import { RepositoryMeta } from './RepositoryMeta';
import { RepositoryRating } from './RepositoryRating';
import { RepositoryStoreType } from '@/store/slices/favorites/favorites.slice';

type RepositoryCardProps = {
  repository: RepositoryStoreType;
  showRating?: boolean;
};

const RepositoryCard: FC<RepositoryCardProps> = ({
  repository,
  showRating = false
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <RepositoryHeader repository={repository} />
        <RepositoryDescription
          description={repository.descriptionHTML}
        />
        <RepositoryMeta
          language={repository.primaryLanguage}
          updatedAt={repository.updatedAt}
          stars={repository.stargazerCount}
        />
        {showRating && (
          <RepositoryRating repoId={repository.id} rating={repository?.rating} />
        )}
      </CardContent>
    </Card>
  );
};

export { RepositoryCard };