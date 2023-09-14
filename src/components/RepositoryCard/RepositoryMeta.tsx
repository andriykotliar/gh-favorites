import { Box } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FC } from 'react';
import { formatDate, formatStars } from './helpers';
import { RepositoryDataFragment } from '@/__generated__/graphql';

type RepositoryMetaProps = {
  language: RepositoryDataFragment['primaryLanguage'];
  stars: number;
  updatedAt: string;
};

const boxStyles = {
  display: 'flex',
  alignItems: 'center'
};

const languageBageStyle = {
  width: 10,
  height: 10,
  borderRadius: '50%'
};

const starIconStyle = {
  width: 15,
  heigh: 15,
  color: '#777'
};

const RepositoryMeta: FC<RepositoryMetaProps> = ({
  language,
  stars,
  updatedAt
}) => {
  return (
    <Box sx={boxStyles} pt={2} gap={2} fontSize={12} flexWrap="wrap">
      {language && (
        <Box sx={boxStyles} gap={1}>
          <Box
            sx={{
              ...languageBageStyle,
              background: language.color,
            }}
          />
          {language.name}
        </Box>
      )}
      <Box sx={boxStyles} gap={0.5}>
        <StarBorderIcon sx={starIconStyle} />
        {formatStars(stars)}
      </Box>
      <Box component="span">
        {formatDate(updatedAt)}
      </Box>
    </Box>
  );
};

export { RepositoryMeta };