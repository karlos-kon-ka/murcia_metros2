import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
        marginTop: 'auto'
      }}
    >
      <Link
        href="https://www.linkedin.com/in/carlos-p-26034328b/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
      >
        <LinkedInIcon sx={{ marginRight: '8px' }} />
        <Typography variant="body1">LinkedIn</Typography>
      </Link>
      <Typography variant="body2" sx={{ marginLeft: 'auto' }}>
        © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
