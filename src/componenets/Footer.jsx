import React from 'react';
import { Box, Container, Grid, Typography, IconButton, AccordionSummary, Accordion, AccordionDetails } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import whiteLogo from '../assets/ever.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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

      }}
    >
      <Container>
        <Grid >
          {/* Column 1 - Evergreen */}
          <Grid item xs={12}>
            <img src={whiteLogo} className='everlogo' alt="" />
          </Grid>

          {/* Follow Us */}


          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',


            '@media (max-width: 970px)': {
              display: 'flex',
              flexDirection: 'column-reverse'
            },
          }}>
            <Grid  sx={{
              display: 'flex',
              flexDirection: 'column', marginTop: "25px",
            }}>
              <Typography variant="h6">Connect :</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: "10px" }}>
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


            <Grid item xs={12} md={9} sx={{
              marginTop: "25px",
              '@media (max-width: 710px)': {
                display: 'none'
              },
            }}>

              <Grid display={'flex'} alignItems={'cenetr'} justifyContent={'center'} gap={20} >

                <Grid item xs={12} md={4}>
                  <Typography variant="h6" fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Tributes</Typography>
                  <Typography fontFamily={'Didot LT Pro, Bold'}>Create a Tribute</Typography>
                </Grid>


                <Grid item xs={12} md={4}>
                  <Typography variant="h6" fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>About</Typography>
                  <Typography sx={{ marginTop: "4px" }} fontFamily={'Didot LT Pro, Bold'}>About Everyone Tribute</Typography>
                  <Typography sx={{ marginTop: "4px" }} fontFamily={'Didot LT Pro, Bold'}>How It Works</Typography>
                  <Typography sx={{ marginTop: "4px" }} fontFamily={'Didot LT Pro, Bold'}>FAQ</Typography>
                </Grid>


                <Grid item xs={12} md={4}>
                  <Typography variant="h6" fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Support</Typography>
                  <Typography sx={{ marginTop: "4px" }} fontFamily={'Didot LT Pro, Bold'}>Contact Us</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Accordion sx={{
              width: '100%', background: 'transparent', display: 'none', '@media (max-width: 710px)': {
                display: 'block'
              },
              border: 'none',
              borderBottom: '1px solid white'
            }}>
              <AccordionSummary id="panel-header" aria-controls="panel-content" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography variant="h6" color={'white'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Support</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={'white'} sx={{ marginTop: "4px" }} fontFamily={'Didot LT Pro, Bold'}>Contact Us</Typography>
              </AccordionDetails>
            </Accordion>



            <Accordion sx={{
              width: '100%', background: 'transparent', display: 'none', '@media (max-width: 710px)': {
                display: 'block'
              },
              border: 'none',
              borderBottom: '1px solid white'
            }}>
              <AccordionSummary id="panel-header" aria-controls="panel-content" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography variant="h6" color={'white'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>About</Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ marginTop: "4px", color: 'white' }} fontFamily={'Didot LT Pro, Bold'}>About Everyone Tribute</Typography>
                <Typography sx={{ marginTop: "4px", color: 'white' }} fontFamily={'Didot LT Pro, Bold'}>How It Works</Typography>
                <Typography sx={{ marginTop: "4px", color: 'white' }} fontFamily={'Didot LT Pro, Bold'}>FAQ</Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion sx={{
              width: '100%', background: 'transparent', display: 'none', '@media (max-width: 710px)': {
                display: 'block'
              },
              border: 'none',
              borderBottom: '1px solid white'
            }}>
              <AccordionSummary id="panel-header" aria-controls="panel-content" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                <Typography variant="h6" color={'white'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Tributes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={'white'} fontFamily={'Didot LT Pro, Bold'}>Create a Tribute</Typography>
              </AccordionDetails>
            </Accordion>

          </Box>





        </Grid>

        {/* Horizontal Line */}
        <hr
          style={{
            borderColor: 'white',
            width: '100%', // Span the entire width
            margin: '20px 0',
            marginTop: "85px",
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