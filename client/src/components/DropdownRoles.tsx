import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useState } from 'react'

import type { SelectChangeEvent } from '@mui/material/Select'
import type { FC } from 'react'

interface DropdownRolesProps {
  onRoleChange: (selectedRole: string) => void
}

const DropdownRoles: FC<DropdownRolesProps> = ({ onRoleChange }) => {
  const [role, setRole] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    const selectedRole = event.target.value as string
    setRole(selectedRole)
    onRoleChange(selectedRole)
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
          value={role}
          onChange={handleChange}
          sx={{
            backgroundColor: '#FFFAFAB0',
            '&:focus': { borderColor: '#03C6523B' },
            borderRadius: '10rem',
            height: '3rem',
          }}
        >
          <MenuItem value="Developer">Developer</MenuItem>
          <MenuItem value="Designer">Designer</MenuItem>
          <MenuItem value="Team Lead">Team Lead</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default DropdownRoles
