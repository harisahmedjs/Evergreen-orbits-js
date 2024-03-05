import React from 'react';
import { Typography, Button } from '@mui/material';

const CustomButton = () => {
  return (
    <Typography>
      <Button
        sx={{
          background: '#378752',
          '&:hover': {
            background: '#333333',
          },
          borderRadius: '20px',
        }}
        variant="contained"
      >
        Create Obituary
      </Button>
    </Typography>
  );
};

export default CustomButton;
