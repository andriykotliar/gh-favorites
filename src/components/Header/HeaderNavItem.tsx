import { CSSProperties, FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { AppRoutes } from '../../common';

type HeaderNavItemProps = {
  title: string;
  path: AppRoutes;
  onMenuClick?: (e: MouseEvent<HTMLElement>) => void;
  color?: CSSProperties['color'];
};

const HeaderNavItem: FC<HeaderNavItemProps> = ({
  title,
  path,
  onMenuClick,
  color = "white"
}) => {
  return (
    <MenuItem
      onClick={onMenuClick}
      color="white"
    >
      <Link
        to={path}
        style={{
          color,
          textDecoration: 'none'
        }}
      >
        {title}
      </Link>
    </MenuItem>
  );
};

export { HeaderNavItem };