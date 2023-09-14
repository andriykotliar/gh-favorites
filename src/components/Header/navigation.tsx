import { AppRoutes } from "@/common";
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const navigation = [
  {
    title: 'Search',
    path: AppRoutes.ROOT,
    icon: <SearchIcon />,
  },
  {
    title: 'Favorites',
    path: AppRoutes.FAVORITES,
    icon: <BookmarkBorderIcon />,
  }
];

export { navigation };