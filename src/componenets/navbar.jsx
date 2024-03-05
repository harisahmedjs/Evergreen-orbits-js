import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';

const Navbar = () => {
  const [tributeMenuAnchor, setTributeMenuAnchor] = React.useState(null);
  const [aboutMenuAnchor, setAboutMenuAnchor] = React.useState(null);

  const handleTributeMenuOpen = (event) => {
    setTributeMenuAnchor(event.currentTarget);
  };

  const handleAboutMenuOpen = (event) => {
    setAboutMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setTributeMenuAnchor(null);
    setAboutMenuAnchor(null);
  };

  return (
    <AppBar position="sticky" top="0" sx={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.3)' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: '#005826' }}>
            EvergreenOrbit
          </Typography>

          <Button
            variant="text"
            color="primary"
            aria-controls="tribute-menu"
            aria-haspopup="true"
            onMouseOver={handleTributeMenuOpen}
            sx={{ color: '#005826' }}
          >
            Tribute
          </Button>
          <Menu
            id="tribute-menu"
            anchorEl={tributeMenuAnchor}
            open={Boolean(tributeMenuAnchor)}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ color: '#005826' }}>
              Create a Tribute
            </MenuItem>
          </Menu>

          <Button
            variant="text"
            color="primary"
            aria-controls="about-menu"
            aria-haspopup="true"
            onMouseEnter={handleAboutMenuOpen}
            onMouseLeave={handleMenuClose}
            sx={{ color: '#005826' }}
          >
            About
          </Button>
          <Menu
            id="about-menu"
            anchorEl={aboutMenuAnchor}
            open={Boolean(aboutMenuAnchor)}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ color: '#005826' }}>
              About Everyone Tribute
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ color: '#005826' }}>
              How It Works
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ color: '#005826' }}>
              FAQ
            </MenuItem>
          </Menu>

          <Typography variant="body1" sx={{ marginLeft: 2, color: '#005826' }}>
            Simple Pricing
          </Typography>

          <IconButton color="primary" sx={{ marginLeft: 'auto' }}>
            <Search sx={{ color: '#005826' }} />
          </IconButton>

          <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>
            Sign In
          </Button>
          <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
