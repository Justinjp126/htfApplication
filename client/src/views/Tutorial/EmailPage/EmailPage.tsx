import { ThemeProvider, createTheme } from '@mui/material'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Create a theme with default typography settings
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    primary: {
      main: '#000',
    },
  },
  spacing: 8, // Define the base spacing unit
})

export default function EmailPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  function handleClick() {
    navigate('/GradePage', { state: { email, name } })
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '75%',
          margin: '0 auto',
        }}
      >
        <img
          style={{
            width: '20%',
            height: 'auto',
            textAlign: 'center',
            display: 'block',
            padding: '3rem',
          }}
          src="/logo.png"
          alt="Logo"
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>1</span>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
          bgcolor: '#03C6523B',
          width: '75%',
          margin: 'auto',
          padding: '1rem 3rem',
          height: '70dvh',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            padding: '2rem',
          }}
        >
          <Typography
            color="primary"
            sx={{
              marginTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            Enter your Purdue Email: <span style={{ color: 'red' }}> *</span>
          </Typography>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            id="outlined-required"
            label=""
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                outline: 'transparent',
                borderRadius: '10rem',
                backgroundColor: '#FFFAFAB0',
                height: '2.5rem',
                margin: '.5rem',
              },
            }}
          />
          <Typography
            color="primary"
            sx={{
              marginTop: '5rem',
              fontSize: '1.25rem',
            }}
          >
            Full Name: <span style={{ color: 'red' }}> *</span>
          </Typography>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            required
            id="outlined-required"
            label=""
            variant="outlined"
            InputProps={{
              style: {
                outline: 'transparent',
                borderRadius: '10rem',
                backgroundColor: '#FFFAFAB0',
                height: '2.5rem',
                margin: '.5rem',
              },
            }}
            fullWidth
          />
          <button
            type="submit"
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
              position: 'absolute',
              bottom: '2rem',
              left: '3rem',
              fontFamily: 'Poppins, sans-serif',
              opacity: isHovered ? 0.8 : 1,
            }}
            onMouseOver={() => setIsHovered(true)}
            onFocus={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            onBlur={() => setIsHovered(false)}
          >
            Back
          </button>
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
              position: 'absolute',
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
