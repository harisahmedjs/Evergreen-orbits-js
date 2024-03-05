import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h6" color="text.primary">
              Evergreen Tribute
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connect with us:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href="#"
                color="text.secondary"
                sx={{
                  mr: 1,
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                <i className="bi bi-facebook" />
              </Link>
              <Link
                href="#"
                color="text.secondary"
                sx={{
                  mr: 1,
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                <i className="bi bi-twitter" />
              </Link>
              <Link
                href="#"
                color="text.secondary"
                sx={{
                  mr: 1,
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                <i className="bi bi-instagram" />
              </Link>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary">
              &copy; 2023 Evergreen Tribute. All Rights Reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="/about" color="inherit">
                About
              </Link>{' '}
              |{' '}
              <Link href="/how-it-works" color="inherit">
                How It Works
              </Link>{' '}
              |{' '}
              <Link href="/faq" color="inherit">
                FAQ
              </Link>{' '}
              |{' '}
              <Link href="/support" color="inherit">
                Support
              </Link>{' '}
              |{' '}
              <Link href="/terms-privacy-policy" color="inherit">
                Terms & Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;