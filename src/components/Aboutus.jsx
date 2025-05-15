import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

// Import your images
import vectorHelp from '../assets/vectorhelp.png';
import leadswapLogo from '../assets/leadswap.png';
import arrowlogo from '../assets/arrow.png';

// Custom font style for Bayon font
const bayonFontStyle = {
  fontFamily: '"Bayon", sans-serif'
};

const AboutUs = () => {
  return (
    <Box sx={{
      backgroundColor: '#f9f5f2',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      pt: 3,
      pb: 5
    }}>
      {/* Side vertical text with gradient */}
      <Box
        sx={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100%',
          width: '60px',
          display: 'flex',
          justifyContent: 'center',
          opacity: 0.5,
          zIndex: 0
        }}
      >
        <Typography
          sx={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '50%',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            background: 'linear-gradient(to right, rgba(200, 169, 196, 1), rgba(255, 255, 255, 1))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '0.2em',
            width: '398px',
            height: '60px',
            ...bayonFontStyle
          }}
        >
          ABOUTUS
        </Typography>
      </Box>

      <Container maxWidth="md" sx={{ pr: 6, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          backgroundColor: 'rgba(255, 241, 229, 1)', 
          px: 4, 
          py: 2, 
          mb: 5, 
          mt: 2,
          borderRadius: '4px',
          width: '100%'
        }}>
          <Typography variant="h4" component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#333',
              fontSize: '2.2rem'
            }}>
            About us
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 'medium',
                color: '#333',
                fontSize: '0.9rem'
              }}>
              OUR
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 'medium',
                color: '#333',
                fontSize: '0.9rem'
              }}>
              BUSINESS
            </Typography>
          </Box>
        </Box>

        {/* Mission Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            borderRadius: '16px', 
            backgroundColor: '#f2f2f0', 
            p: 4,
            mb: 5,
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            maxWidth: '100%'
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 'bold',
              borderBottom: '1px solid #ccc',
              pb: 1,
              mb: 4,
              ...bayonFontStyle
            }}
          >
            OUR MISSION
          </Typography>
          <Box sx={{
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: 2 
          }}>
            <Typography 
                variant="body1" 
                sx={{
                  flex: 1,
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#333',
                  pr: { xs: 0, sm: 10 },
                  mb: 2
                }}
              >
                To empower businesses with AI-driven lead generation tools that are simple to use, and always reliable—no fluff, no outdated databases.

                To empower businesses with AI-driven lead generation tools that are simple to use, consistently reliable, and built for real-world results—no fluff, no outdated databases, and no empty promises. 

            </Typography>

            {/* Arrow icon */}
            <Box sx={{ 
              position: { xs: 'relative', sm: 'absolute' }, 
              right: 30, 
              top: { xs: 25, sm: '50%' }, 
              transform: { xs: 'none', sm: 'translateY(-10%)' },
              mt: { xs: 2, sm: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-end' }
            }}>
              <img src={arrowlogo} alt="Target" width="60" height="60" />
            </Box>
          </Box>
        </Paper>

        {/* Who We Help Section */}
        <Paper 
          elevation={0} 
          sx={{
            borderRadius: '16px', 
            backgroundColor: '#fff', 
            p: 4,
            mb: 5,
            position: 'relative',
            border: 'none',
            maxWidth: '100%'
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 'bold',
              pb: 1,
              mb: 4,
              borderBottom: '1px solid #ccc',
              ...bayonFontStyle
            }}
          >
            WHO WE HELP
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start' }}>
            <Box sx={{ 
              mr: { xs: 0, sm: 5 }, 
              mb: { xs: 2, sm: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              {/* Vector help image */}
              <img src={vectorHelp} alt="Handshake" width="80" />
            </Box>
            
            <Box>
              <Typography variant="body1" sx={{ mb: 2.3, fontSize: '1rem' }}>
              We serve professionals and teams across multiple industries, including:

              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem' }}>
                Real Estate , Insurance , Marketing Agencies
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2.8, fontSize: '1rem' }}>
                B2B Companies & B2C Companies.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2.7, fontSize: '1rem' }}>
                SaaS founders who need to reach decision-makers, not gatekeepers
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 0, fontSize: '1rem' }}>
                SaaS Model Businesses and 
                Freelancers.
              </Typography>
            </Box>
          </Box>
        </Paper>
        
        {/* Why LeadSwap AI Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            borderRadius: '16px', 
            backgroundColor: '#f2f2f0', 
            p: 4,
            mb: 5,
            position: 'relative',
            border: 'none',
            maxWidth: '100%'
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 'bold',
              pb: 1,
              mb: 4,
              borderBottom: '1px solid #ccc',
              ...bayonFontStyle
            }}
          >
            WHY LEADSWAP AI?
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2.5 }}>
                Verified Data – No guesswork, only actionable leads
              </Typography>
              
              <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2.3 }}>
                Prompt-Based Search – Tell us what you need, we’ll find it
              </Typography>
              
              <Typography variant="body1" sx={{ fontSize: '1rem', mb: 3 }}>
                No Free Trials – Just results that speak for themselves
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1rem', mb: 3 }}>
                Industry-Specific Targeting – Get leads that convert
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: { xs: 'center', sm: 'flex-end' }, 
              mt: { xs: 2, sm: 0 },
              ml: { xs: 0, sm: 2 }
            }}>
              {/* LeadSwap AI Logo */}
              <img src={leadswapLogo} alt="LeadSwap AI Logo" width="120" />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;