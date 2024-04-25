import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

export default function SubmitNext() {
  const { state } = useLocation()
  const navigate = useNavigate()
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
    extraInfo,
    isChecked,
  } = state
  const collectData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      let result = await fetch('http://localhost:4000/', {
        method: 'post',
        body: JSON.stringify({
          name: currName,
          email: currEmail,
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
          hasBeenMemberBefore: isChecked,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!result.ok) {
        throw new Error('Network response was not ok')
      }
      result = await result.json()
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/FormCompleted', {})
    } catch (error) {
      if (typeof error === 'string') {
        console.error('Error occurred while processing data:', error)
      } else {
        console.error('Unknown error occurred:', error)
      }
    }
  }

  console.log(state)
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={collectData}>
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
              Complete Application
            </Typography>
            <Typography
              color="black"
              sx={{
                paddingTop: '1.5rem',
                fontSize: '1.25rem',
              }}
            >
              Click the Submit button to finish.
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
            <button
              type="button"
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
              style={{
                padding: '8px 16px',
                borderRadius: '50px',
                backgroundColor: '#277D4A',
                color: 'white',
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
              Submit
            </button>
          </Box>
        </Box>
      </form>
    </ThemeProvider>
  )
}
