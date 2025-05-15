import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// i have inserted imgs in assets 
import vectorHelp from '../assets/vectorhelp.png';
import leadswapLogo from '../assets/leadswap.png';
import arrowlogo from '../assets/arrow.png';

// Styled stuff
const MainWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#f9f5f2',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(5)
}));

// vertical aboutus 
const SideText = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100%',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  opacity: 0.5,
  zIndex: 0
}));

const BigSideText = styled(Typography)(({ theme }) => ({
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
  fontFamily: '"Bayon", sans-serif'  // We need this specific font
}));

// Top bar
const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 241, 229, 1)',
  padding: theme.spacing(2, 4),
  marginBottom: theme.spacing(5),
  marginTop: theme.spacing(2),
  borderRadius: '4px',
  width: '100%'
}));

// Section 
const SectionHead = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  borderBottom: '1px solid #ccc',
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(4),
  fontFamily: '"Bayon", sans-serif' // Need this font again
}));

// Content box 
const ContentBox = styled(Paper)(({ theme, bgColor = '#f2f2f0' }) => ({
  borderRadius: '16px',
  backgroundColor: bgColor,
  padding: theme.spacing(4),
  marginBottom: theme.spacing(5),
  position: 'relative',
  border: 'none',
  maxWidth: '100%',
  boxShadow: 'none' 
}));

// Main component
const AboutUs = () => {
  return (
    <MainWrapper>
      {/* That vertical text*/}
      <SideText>
        <BigSideText>ABOUTUS</BigSideText>
      </SideText>

      <Container maxWidth="md" sx={{ pr: 6, position: 'relative', zIndex: 1 }}>
        {/* Header of top*/}
        <TopBar>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#333', fontSize: '2.2rem' }}>
            About us
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#333', fontSize: '0.9rem' }}>
              OUR
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#333', fontSize: '0.9rem' }}>
              BUSINESS
            </Typography>
          </Box>
        </TopBar>

        {/* Mission section as ui */}
        <ContentBox>
          <SectionHead variant="subtitle1">OUR MISSION</SectionHead>
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
              To empower businesses with AI-driven lead generation tools that are simple to use, consistently reliable, and built for real-world results—no fluff, no outdated databases, and no empty promises.
            </Typography>

            {/* Arrow png from ui*/}
            <Box sx={{
              position: { xs: 'relative', sm: 'absolute' },
              right: 30,
              top: { xs: 25, sm: '50%' },
              transform: { xs: 'none', sm: 'translateY(-10%)' },
              mt: { xs: 2, sm: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-end' }
            }}>
              <img src={arrowlogo} alt="Target" style={{ width: '60px', height: 'auto' }} />
            </Box>
          </Box>
        </ContentBox>

        {/* Who We Help */}
        <ContentBox bgColor="#fff">
          <SectionHead variant="subtitle1">WHO WE HELP</SectionHead>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start' }}>
            <Box sx={{
              mr: { xs: 0, sm: 5 },
              mb: { xs: 2, sm: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              <img src={vectorHelp} alt="Handshake" style={{ width: '80px', height: 'auto' }} />
            </Box>

            <Box>
              <Typography variant="body1" sx={{ mb: 2.3, fontSize: '1rem' }}>
                We serve professionals and teams across multiple industries, including:
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem' }}>
                Real Estate, Insurance, Marketing Agencies
              </Typography>

              <Typography variant="body1" sx={{ mb: 2.8, fontSize: '1rem' }}>
                B2B Companies & B2C Companies
              </Typography>

              <Typography variant="body1" sx={{ mb: 2.7, fontSize: '1rem' }}>
                SaaS founders who need to reach decision-makers, not gatekeepers
              </Typography>

              <Typography variant="body1" sx={{ mb: 0, fontSize: '1rem' }}>
                SaaS Model Businesses and Freelancers
              </Typography>
            </Box>
          </Box>
        </ContentBox>

        {/* Why LeadSwap and page components from ui */}
        <ContentBox>
          <SectionHead variant="subtitle1">WHY LEADSWAP AI?</SectionHead>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2.5 }}>
                Verified Data – No guesswork, only actionable leads
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1rem', mb: 2.3 }}>
                Prompt-Based Search – Tell us what you need, we'll find it
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
              <img src={leadswapLogo} alt="LeadSwap AI Logo" style={{ width: '120px', height: 'auto' }} />
            </Box>
          </Box>
        </ContentBox>
      </Container>
    </MainWrapper>
  );
};

export default AboutUs;
