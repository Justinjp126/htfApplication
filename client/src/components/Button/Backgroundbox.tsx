import { Box, ThemeProvider } from '@mui/system'
import * as React from 'react'

export default function Backgroundbox() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#90ee90',
            dark: '#90ee90',
          },
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'lightgreen', // Background color of the box
          margin: 'auto', // Center the box on the page
          padding: 4, // Padding inside the box
          borderRadius: '8px', // Border radius of the box
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Shadow effect
          width: '80%', // Set width relative to the parent
          maxWidth: '800px', // Increase the maximum width of the box
          height: 'auto', // Height is determined by content
          maxHeight: '800px', // Increase the maximum height of the box
          textAlign: 'center', // Text alignment
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  )
}
