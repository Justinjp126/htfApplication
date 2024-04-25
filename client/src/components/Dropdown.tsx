import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useState } from 'react'

import type { ButtonProps } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { FC } from 'react'

interface DropdownProps {
  onGradeStandingChange: (selectedGradeStanding: string) => void
}

export default function Dropdown({ onGradeStandingChange }: DropdownProps) {
  const [gradeStanding, setGradeStanding] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    const selectedGradeStanding = event.target.value as string
    setGradeStanding(selectedGradeStanding)
    onGradeStandingChange(selectedGradeStanding)
  }

  return (
    <Box
      sx={{
        minWidth: 120,
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
            height: '3rem',
          }}
        >
          <MenuItem value="Freshman">Freshman</MenuItem>
          <MenuItem value="Sophomore">Sophomore</MenuItem>
          <MenuItem value="Junior">Junior</MenuItem>
          <MenuItem value="Senior">Senior</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
