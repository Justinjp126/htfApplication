import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import DropdownRoles from 'components/DropdownRoles'
import RoleBoxes from 'components/RoleBoxes'

import type { SetStateAction } from 'react'

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

export default function RoleChoices() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [primaryRole, setPrimaryRole] = useState('')
  const [secondaryRole, setSecondaryRole] = useState({
    designer: false,
    developer: false,
    teamlead: false,
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleSecondaryRole = (
    newRoles: SetStateAction<{
      designer: boolean
      developer: boolean
      teamlead: boolean
    }>
  ) => {
    setSecondaryRole(newRoles)
  }
  const { currName, currEmail, major, gradeStanding } = state

  const handleRoleChange = (selectedPrimaryRole: SetStateAction<string>) => {
    setPrimaryRole(selectedPrimaryRole)
  }
  console.log(state)
  function handleClick() {
    navigate('/QuestionsPage1', {
      state: {
        currName,
        currEmail,
        major,
        gradeStanding,
        primaryRole,
        secondaryRole,
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
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>4</span>
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
            margin: 'auto',
            padding: '2rem',
          }}
        >
          <Typography
            color="primary"
            sx={{
              marginTop: '1rem',
              fontSize: '1.25rem',
            }}
          >
            What primary role are you interested in?
            <span style={{ color: 'red' }}> *</span>
          </Typography>
          <DropdownRoles onRoleChange={handleRoleChange} />
          <Typography
            color="primary"
            sx={{
              marginTop: '2rem',
              fontSize: '1.25rem',
            }}
          >
            What other roles are you interested in?
            <span style={{ color: 'red' }}> *</span>
          </Typography>
          <Box>
            <RoleBoxes
              initialValues={secondaryRole}
              onRoleChange={handleSecondaryRole}
            />
          </Box>
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
