import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import type { ButtonProps } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { FC } from 'react'

export default function StatusDropdown() {
  const [role, setRole] = useState('10') // Set default value to 10 (Grade Standing)
  const [selected, setSelected] = useState(false)
  const handleChange = (event: SelectChangeEvent) => {
    setRole(String(event.target.value))
  }

  return (
    <Box
      sx={{
        minWidth: 120,
        marginTop: 2,
        marginLeft: 1,
      }}
    >
      <FormControl variant="standard">
        <Select
          onChange={handleChange}
          value={role}
          sx={{
            border: 'none',
            backgroundColor: 'transparent',
            '&:focus': {
              borderColor: 'transparent',
              background: 'transparent',
            },
            marginTop: '-.17rem',
            marginLeft: '1rem',
            fontSize: '1.25rem',
          }}
          style={selected ? { backgroundColor: 'transparent' } : {}}
          onOpen={() => setSelected(true)}
          onClose={() => setSelected(false)}
          disableUnderline
        >
          <MenuItem value={10}>Accepted</MenuItem>
          <MenuItem value={20}>Rejected</MenuItem>
          <MenuItem value={30}>In Progress</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
