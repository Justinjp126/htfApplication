import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

import BackButton from 'views/Main/BackButton'
import SubmitButton from 'views/Main/SubmitButton'

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

export default function SubmitPrevious() {
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
          height: '35rem',
          padding: '1rem 3rem',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '95%',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '1rem',
            backgroundColor: '#277D4A',
            borderRadius: '3rem',
          }}
        />
        <Box
          sx={{
            margin: 'auto',
            padding: '2rem',
          }}
        >
          <span
            style={{
              width: '100%',
              color: '#277D4A',
              height: '1rem',
            }}
          />
          <Typography
            variant="h1"
            fontWeight="700"
            fontFamily="Poppins"
            color="#277D4A"
            sx={{
              fontSize: '2rem',
              textShadow: '0px 1px 1px #00000040',
              padding: '1rem 0 1rem',
              textAlign: 'left',
            }}
          >
            You've been a Hack the Future member in the past. Welcome back!
          </Typography>
          <Typography
            color="black"
            sx={{
              paddingTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            You came back, so we must be doing something right :)
          </Typography>
          <Typography
            color="black"
            sx={{
              paddingTop: '0.5rem',
              fontSize: '1.25rem',
            }}
          >
            Either way, we're always looking for ways to continue to improve the
            club and your experience.
          </Typography>
          <Typography
            color="black"
            fontWeight="bold"
            sx={{
              paddingTop: '2rem',
              fontSize: '1.25rem',
            }}
          >
            If you have the time, please fill out this feedback form before your
            submission:
          </Typography>
          <Typography
            color="black"
            fontWeight="bold"
            sx={{
              paddingTop: '0.5rem',
              fontSize: '1.25rem',
            }}
          >
            https://forms.gle/Nws15LU594fhPDPMA
          </Typography>
          <Typography
            color="black"
            sx={{
              paddingTop: '2rem',
              fontSize: '1.25rem',
            }}
          >
            **The linked form is anonymous and NOT a part of the application
            process. It is completely optional and will not affect your
            application status.
          </Typography>
          <BackButton
            to="/ExtraInfoPage"
            sx={{
              display: 'flex',
              marginLeft: 'auto',
              position: 'absolute',
              bottom: '2rem',
              left: '3rem',
            }}
          />
          <SubmitButton
            sx={{
              display: 'flex',
              marginLeft: 'auto',
              position: 'absolute',
              bottom: '2rem',
              right: '3rem',
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
