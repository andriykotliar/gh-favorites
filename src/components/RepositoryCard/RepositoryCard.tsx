import { FC } from 'react';
import { Card, CardContent } from '@mui/material';
import { RepositoryDataFragment } from '@/__generated__/graphql';
import { RepositoryHeader } from './RepositoryHeader';
import { RepositoryDescription } from './RepositoryDescription';
import { RepositoryMeta } from './RepositoryMeta';
import { RepositoryRating } from './RepositoryRating';

type RepositoryCardProps = {
  repository: RepositoryDataFragment;
  showRating?: boolean;
};

const RepositoryCard: FC<RepositoryCardProps> = ({
  repository,
  showRating = false
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <RepositoryHeader
          repoId={repository.id}
          url={repository.url}
          title={repository.nameWithOwner}
          isRepoArchived={repository.isArchived}
        />
        <RepositoryDescription
          description={repository.descriptionHTML}
        />
        <RepositoryMeta
          language={repository.primaryLanguage}
          updatedAt={repository.updatedAt}
          stars={repository.stargazerCount}
        />
        {showRating && (
          <RepositoryRating repoId={repository.id} />
        )}
      </CardContent>
    </Card>
  );
};

export { RepositoryCard };