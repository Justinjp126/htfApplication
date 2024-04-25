import { Checkbox, FormControlLabel } from '@mui/material'
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

export default function ExtraInfoPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [extraInfo, setExtraInfo] = useState('')
  const [isChecked, setChecked] = useState(false)
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
    questionThree,
    questionFour,
    questionFive,
  } = state

  function handleClick() {
    navigate('/SubmitNext', {
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
        questionFour,
        questionFive,
        extraInfo,
        isChecked,
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
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>10</span>
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
          mt: '0.1rem',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            padding: '2rem',
          }}
        >
          <Typography
            color="primary"
            sx={{
              marginTop: '0.5rem',
              fontSize: '1.25rem',
            }}
          >
            Anything else you would like us to know?
            <span style={{ color: 'red' }}> *</span>
          </Typography>
          <TextField
            value={extraInfo}
            onChange={(e) => {
              setExtraInfo(e.target.value)
            }}
            id="outlined-required"
            label=""
            variant="outlined"
            fullWidth
            rows={5}
            multiline
            InputProps={{
              style: {
                outline: 'transparent',
                borderRadius: '1rem',
                backgroundColor: '#FFFAFAB0',

                margin: '.5rem .5rem 1.5rem',
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked} // Define isChecked state
                onChange={(e) => setChecked(e.target.checked)} // Define setChecked function
                color="primary"
              />
            }
            label="Have you ever been a Hack the Future member in the past?"
          />
          <Typography
            color="primary"
            sx={{
              marginTop: '3rem',
              fontSize: '1.25rem',
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
