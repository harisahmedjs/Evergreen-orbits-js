import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import whiteLogo from '../assets/ever.png'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#394A4D",
        color: "white",
        paddingTop: "70px",
        paddingBottom: "20px", // Increased padding for more space
        width: "full",
        minHeight: "370px", // Set a minimum height to ensure the hr spans the entire width
        position: 'relative', // Set position to relative
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {/* Column 1 - Evergreen */}
          <Grid item xs={12}>
           <img src={whiteLogo} className='everlogo' alt="" />
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column' , marginTop: "25px"}}>
            <Typography variant="h6">Connect :</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , gap: "10px"}}>
              <IconButton
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Columns 2, 3, 4 */}
        <Grid item xs={12} md={9} sx={ {marginTop: "25px" ,}}>
            <Grid container spacing={3}>
              {/* Column 2 */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Tributes</Typography>
                <Typography fontFamily={'Didot LT Pro, Bold'}>Create a Tribute</Typography>
              </Grid>

              {/* Column 3 */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>About</Typography>
                <Typography sx={{marginTop:"4px"}} fontFamily={'Didot LT Pro, Bold'}>About Everyone Tribute</Typography>
                <Typography sx={{marginTop:"4px"}} fontFamily={'Didot LT Pro, Bold'}>How It Works</Typography>
                <Typography sx={{marginTop:"4px"}} fontFamily={'Didot LT Pro, Bold'}>FAQ</Typography>
              </Grid>

              {/* Column 4 */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Support</Typography>
                <Typography sx={{marginTop:"4px"}} fontFamily={'Didot LT Pro, Bold'}>Contact Us</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Horizontal Line */}
        <hr
          style={{
            borderColor: 'white',
            width: '100%', // Span the entire width
            margin: '20px 0',
            marginTop : "85px",
            boxSizing: 'content-box' // Add margin to make it visible
          }}
        />

        {/* Copyright and Terms/Privacy */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="caption" fontFamily={'Didot LT Pro, Bold'}>
              © 2023 Evergreen Tribute. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
            <Typography variant="caption">
              <span>Terms </span> <span style={{ marginLeft: '8px' }} fontFamily={'Didot LT Pro, Bold'}>Privacy Policy</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;