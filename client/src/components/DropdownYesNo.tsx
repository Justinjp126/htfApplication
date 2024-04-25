import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useState } from 'react'

import type { SelectChangeEvent } from '@mui/material/Select'

export default function DropdownYesNo() {
  const [role, setRole] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string)
  }

  return (
    <Box
      sx={{
        minWidth: 10,
        marginTop: 2,
      }}
    >
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select"
          id="demo-simple-select"
          onChange={handleChange}
          sx={{
            backgroundColor: '#FFFAFAB0',
            '&:focus': { borderColor: '#03C6523B' },
            borderRadius: '10rem',
            height: '2rem',
            width: '5rem',
          }}
        >
          <MenuItem value={10}>Yes</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
