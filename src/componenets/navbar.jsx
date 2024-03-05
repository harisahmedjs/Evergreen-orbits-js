import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import CustomButton from './button';

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
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Typography variant="h4" sx={{ color: '#005826' }}>
          EvergreenOrbit
        </Typography>

        <Button
          variant="text"
          color="primary"
          aria-controls="tribute-menu"
          aria-haspopup="true"
          onMouseOver={handleTributeMenuOpen}
          sx={{ color: '#333333', marginLeft: '35px' }}
        >
          How it Works
        </Button>

        <Menu
          id="tribute-menu"
          anchorEl={tributeMenuAnchor}
          open={Boolean(tributeMenuAnchor)}
          onClose={handleMenuClose}
          sx={{ borderRadius: "10px", marginTop: "4px" ,size:"2px"}}
        >
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             How It Works
          </MenuItem> <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' , fontWeight: "600"}}>
             How Evergreen works
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             How trees are planted
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             Why publish an obituary online
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' , fontWeight: "600"}}>
             Getting Started
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             Publish an obituary
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             Post a Memory
          </MenuItem>

        </Menu>

        <Button
          variant="text"
          color="primary"
          aria-controls="about-menu"
          aria-haspopup="true"
          onMouseEnter={handleAboutMenuOpen}
          sx={{ color: '#333333' }}
        >
          About
        </Button>

        <Menu
          id="about-menu"
          anchorEl={aboutMenuAnchor}
          open={Boolean(aboutMenuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            About
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' , fontWeight: "600"}}>
             Getting Started
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             Publish an obituary
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
             Post a Memory
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' , fontWeight: "600"}}>
             Resource
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' , fontWeight: "600"}}>
             Frequently Asked Questions
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
             Contact Us
          </MenuItem>
        </Menu>

        <Typography variant="body1" sx={{ marginLeft: 2, color: '#333333' }}>
          Simple Pricing
        </Typography>

        <IconButton color="primary" sx={{ marginLeft: 'auto' ,  marginRight: "18px"  }}>
          <Search sx={{ color: '#005826' }} />
        </IconButton>

        <CustomButton />
       
        <Typography>
        <Button
  sx={{
    background: 'transparent',
    color: "#378752",
    border: "1px solid #378752",
    marginLeft: "15px", 
    '&:hover': {
      background: 'black',
      color: "white",
    },
    borderRadius: '50px',
  }}
  variant="contained"
>
  Login
</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
