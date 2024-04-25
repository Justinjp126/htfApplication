import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/system/Box'

import SortBy from 'components/SortBy'
import StatusDropdown from 'components/StatusDropdown'
import UserInfo from 'components/UserInfo'

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

export default function AdminPage() {
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
          padding: '1rem 2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            paddingBottom: '1rem',
          }}
        >
          <SortBy />
          <StatusDropdown />
        </Box>
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </Box>
    </ThemeProvider>
  )
}
