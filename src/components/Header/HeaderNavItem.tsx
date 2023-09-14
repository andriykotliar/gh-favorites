import { CSSProperties, FC, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { AppRoutes } from '../../common';

type HeaderNavItemProps = {
  title: string;
  path: AppRoutes;
  icon: ReactNode;
  onMenuClick?: (e: MouseEvent<HTMLElement>) => void;
  color?: CSSProperties['color'];
};

const HeaderNavItem: FC<HeaderNavItemProps> = ({
  title,
  path,
  icon,
  onMenuClick,
  color = "white"
}) => {
  return (
    <MenuItem onClick={onMenuClick} sx={{ padding: 0 }}>
      <Link
        to={path}
        style={{
          color,
          textDecoration: 'none',
          padding: '6px 16px',
        }}
      >
        <Box display="flex" alignItems="center" sx={{ gap: 0 }}>
          <ListItemIcon sx={{ color }}>
            {icon}
          </ListItemIcon>
          {title}
        </Box>
      </Link>
    </MenuItem>
  );
};

export { HeaderNavItem };