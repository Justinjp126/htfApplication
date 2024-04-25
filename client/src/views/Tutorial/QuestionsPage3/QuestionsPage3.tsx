import { ThemeProvider, createTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

export default function QuestionsPage3() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [questionThree, setQuestionThree] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const {
    currName,
    currEmail,
    major,
    gradeStanding,
    primaryRole,
    secondaryRole,
    questionOne,
    questionTwo,
  } = state

  function handleClick() {
    navigate('/QuestionsPage4', {
      state: {
        currName,
        currEmail,
        major,
        gradeStanding,
        primaryRole,
        secondaryRole,
        questionOne,
        questionTwo,
        questionThree,
      },
    })
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
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>7</span>
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
            Role related Question 3:
          </Typography>
          <TextField
            value={questionThree}
            onChange={(e) => {
              setQuestionThree(e.target.value)
            }}
            required
            id="outlined-required"
            label=""
            multiline
            rows={12}
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                outline: 'transparent',
                borderRadius: '1rem',
                backgroundColor: '#FFFAFAB0',
                height: 'auto',
                margin: '.5rem',
              },
            }}
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
