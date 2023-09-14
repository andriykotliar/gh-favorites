import { Box, Typography } from "@mui/material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const HeaderLogo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <BookmarksIcon />
      <Typography variant="h5" component="span">
        GithubFavorites
      </Typography>
    </Box>
  );
};

export { HeaderLogo };