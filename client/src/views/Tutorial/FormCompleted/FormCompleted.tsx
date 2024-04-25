import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

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

export default function FormCompleted() {
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
          height: '33rem',
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
              fontSize: '2.75rem',
              textShadow: '0px 1px 1px #00000040',
              padding: '1rem 0 1rem',
              textAlign: 'left',
            }}
          >
            Thank you for applying!
          </Typography>
          <Typography
            color="black"
            sx={{
              paddingTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            Please contact htfpurdue@gmail.com if you have any questions.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
