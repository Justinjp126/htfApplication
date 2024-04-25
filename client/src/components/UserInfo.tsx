import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function UserInfo() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#FFFAFAB0',
        borderRadius: '20px',
        alignItems: 'center',
        padding: '0.75rem 1.25rem',
        marginBottom: '1rem',
      }}
    >
      <Typography
        color="#000"
        sx={{
          fontSize: '1.3rem',
          marginRight: '4rem',
        }}
      >
        John Doe
      </Typography>
      <Typography
        color="#000"
        sx={{
          fontSize: '1.3rem',
          marginRight: '4rem',
        }}
      >
        CS
      </Typography>
      <Typography
        color="#000"
        sx={{
          fontSize: '1.3rem',
          marginRight: '4rem',
        }}
      >
        Designer
      </Typography>
      <Typography
        color="#000"
        sx={{
          fontSize: '1.3rem',
          marginLeft: 'auto',
        }}
      >
        Freshman
      </Typography>
    </Box>
  )
}
