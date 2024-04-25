import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Create a theme with default typography settings
const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#277D4A',
    },
  },
  spacing: 8, // Define the base spacing unit
})

export default function StartPage() {
  const navigate = useNavigate()

  const [isHovered, setIsHovered] = useState(false)
  function handleClick() {
    navigate('/EmailPage', {})
  }
  return (
    <ThemeProvider theme={theme}>
      <img
        style={{
          width: '20%',
          height: 'auto',
          textAlign: 'center',
          margin: 'auto',
          display: 'block',
          padding: '3rem',
        }}
        src="/logo.png"
        alt="Logo"
      />
      <Box
        sx={{
          borderRadius: '1rem',
          bgcolor: '#03C6523B',
          width: '75%',
          margin: 'auto',
          padding: '1rem 3rem',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            padding: '2rem',
          }}
        >
          <Typography
            variant="h1"
            fontWeight="700"
            fontFamily="Poppins"
            color="#277D4A"
            sx={{
              fontSize: '2.75rem',
              textShadow: '0px 1px 1px #00000040',
              padding: '1rem 0 1rem',
              textAlign: 'center',
            }}
          >
            Hack the Future Membership Application
          </Typography>
          <Typography
            color="primary"
            sx={{
              paddingTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            Hi! We're glad you're considering applying to Hack the Future.
          </Typography>
          <Typography
            color="primary"
            sx={{
              paddingTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            Hack the Future is a volunteer-based club that brings students
            together to develop functional software for local non-profits in and
            around West Lafayette. Along with learning new skills through
            programming, web development, data management, leadership and team
            management, you'll find new friends, connections, and experiences
            along the way.
          </Typography>
          <Typography
            color="primary"
            sx={{
              paddingTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            This form is the first step of our application process, and will
            give us an idea about you and your aspirations with the club.
          </Typography>
          <Typography
            color="primary"
            sx={{
              padding: '1rem 0 1rem',
              fontSize: '1.25rem',
            }}
          >
            We look forward to getting to know you! - Hack the Future Executive
            Board
          </Typography>
          <button
            type="submit"
            onClick={handleClick}
            style={{
              padding: '8px 16px',
              borderRadius: '50px',
              backgroundColor: '#93da93',
              transition: 'background-color 100ms ease',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
              fontSize: '1rem',
              display: 'flex',
              marginLeft: 'auto',
              bottom: '2rem',
              right: '3rem',
              fontFamily: 'Poppins, sans-serif',
              opacity: isHovered ? 0.8 : 1,
            }}
            onMouseOver={() => setIsHovered(true)}
            onFocus={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            onBlur={() => setIsHovered(false)}
          >
            Next
          </button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
