import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, CardMedia } from '@mui/material';
import { Search } from '@mui/icons-material';
import CustomButton from './button';
import Everlogo from "../assets/everlogo.png"

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
    <AppBar position="sticky" top="0" sx={{
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.3)',
      '@media screen and (max-width: 600px)': {
        width: '100%'
      }, '@media screen and (max-width: 357px)': {
        width: '100%'
      },
    }}>
      <Toolbar sx={{ justifyContent: 'space-around' }}>

        <CardMedia
          component="img"
          image={Everlogo}
          alt="Your Image"
          sx={{
            width: '338px', '@media screen and (max-width: 600px)': {
              width: '200px'
            }, '@media screen and (max-width: 300px)': {
              width: '150px'
            },
          }}
        />

        <Button
          variant="text"
          color="primary"
          aria-controls="tribute-menu"
          aria-haspopup="true"
          onMouseOver={handleTributeMenuOpen}
          sx={{
            color: '#333333', marginLeft: '35px', '@media screen and (max-width: 1018px)': {
              display: 'none'
            },
          }}
        >
          How it Works
        </Button>

        <Menu
          id="tribute-menu"
          anchorEl={tributeMenuAnchor}
          open={Boolean(tributeMenuAnchor)}
          onClose={handleMenuClose}
          sx={{ borderRadius: "10px", marginTop: "4px", size: "2px" }}
        >
          <MenuItem className='howitwork' onClick={handleMenuClose} sx={{ color: '#333333' }}>
            How It Works
          </MenuItem> <MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
            How Evergreen works
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            How trees are planted
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            Why publish an obituary online
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
            Getting Started
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            Publish an obituary
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            Post a Memory
          </MenuItem>

        </Menu>

        <Button
          className='about'
          variant="text"
          color="primary"
          aria-controls="about-menu"
          aria-haspopup="true"
          onMouseEnter={handleAboutMenuOpen}
          sx={{
            color: '#333333', '@media screen and (max-width: 860px)': {
              display: 'none'
            },
          }}
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
          </MenuItem><MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
            Getting Started
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            Publish an obituary
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333' }}>
            Post a Memory
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
            Resource
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
            Frequently Asked Questions
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#333333', fontWeight: "600" }}>
            Contact Us
          </MenuItem>
        </Menu>

        <Typography className='simple' variant="body1" sx={{
          marginLeft: 2, color: '#333333', '@media screen and (max-width: 790px)': {
            display: 'none'
          },
        }}>
          Simple Pricing
        </Typography>

        <IconButton color="primary" sx={{ marginLeft: 'auto', marginRight: "18px" }}>
          <Search sx={{
            color: '#005826', '@media screen and (max-width: 750px)': {
              display: 'none'
            },
          }} />
        </IconButton>

        <Typography>
          <Button
            sx={{
              background: '#378752',
              '&:hover': {
                background: '#333333',
              },
              borderRadius: '20px',
              '@media screen and (max-width: 750px)': {
                display: 'none'
              },
            }}
            variant="contained"
          >
            Create Obituary
          </Button>
        </Typography>


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







