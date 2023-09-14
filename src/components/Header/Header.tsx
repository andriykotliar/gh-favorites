import { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { navigation } from "./navigation";
import { HeaderNavItem } from "./HeaderNavItem";
import { HeaderLogo } from "./HeaderLogo";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HeaderLogo />
          <Box
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            component="ul"
          >
            {navigation.map((navItem) => (
              <HeaderNavItem {...navItem} key={navItem.path} />
            ))}
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {navigation.map((navItem) => (
                <HeaderNavItem
                  {...navItem}
                  color="black"
                  onMenuClick={handleCloseNavMenu}
                  key={navItem.path}
                />
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };