import { ThemeProvider, createTheme } from '@mui/material/styles'
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

export default function RolesPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  const { currName, currEmail, major, gradeStanding } = state

  function handleClick() {
    navigate('/RoleChoices', {
      state: { currName, currEmail, major, gradeStanding },
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
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>3</span>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
          bgcolor: '#03C6523B',
          width: '75%',
          margin: 'auto',
          padding: '1rem 3rem',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            padding: '2rem',
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
          />
          <span
            style={{
              width: '100%',
              color: '#277D4A',
              height: '2rem',
            }}
          />
          <Typography
            variant="h1"
            fontWeight="700"
            fontFamily="Poppins"
            color="#277D4A"
            sx={{
              fontSize: '2.45rem',
              textShadow: '0px 1px 1px #00000040',
              padding: '1rem 0 1rem',
              textAlign: 'left',
            }}
          >
            Role Descriptions:
          </Typography>
          <Typography
            color="primary"
            sx={{
              marginTop: '1.5rem',
              fontSize: '1.25rem',
            }}
          >
            Team Leaders are the main line of communication between the team and
            the non-profit. Team Leads are responsible for ensuring the team's
            success, and spearheading the development of the project. Team Leads
            will coordinate weekly meetings with their team as well as report to
            the HTF Executive Board on the team's progress (it's not as
            intimidating as it may sound: it's pretty relaxed :) )
          </Typography>

          <Typography
            color="primary"
            sx={{
              marginTop: '3rem',
              fontSize: '1.25rem',
            }}
          >
            Developers will, based on their experience, work on either Frontend,
            Backend, or Fullstack development. Even if you have never worked on
            stack development, the teams will be structured such that you can
            find a comfortable place to begin your development journey.
            Developers will also work closely with the Designers to implement
            the applications.
          </Typography>

          <Typography
            color="primary"
            sx={{
              marginTop: '3rem',
              fontSize: '1.25rem',
            }}
          >
            Designers will interact with the non-profits to design the
            application to their specifications. Using Figma (or other similar
            software), Designers will use their creative skills to come up with
            high-res mockups of the application to present to the team and the
            non-profits, and work with the Developers to bring the non-profits'
            ideas to fruition.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              marginTop: '1.5rem',
            }}
          >
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
      </Box>
    </ThemeProvider>
  )
}
