import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import React, { useEffect, useState } from 'react'

interface RoleBoxesProps {
  initialValues: {
    designer: boolean
    developer: boolean
    teamlead: boolean
  }
  onRoleChange: (newRoles: {
    designer: boolean
    developer: boolean
    teamlead: boolean
  }) => void
}

export default function RoleBoxes({
  initialValues,
  onRoleChange,
}: RoleBoxesProps) {
  const [roles, setRoles] = useState(initialValues)

  useEffect(() => {
    // Update roles state when initialValues change
    setRoles(initialValues)
  }, [initialValues])

  const handleRoles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setRoles({ ...roles, [name]: checked })
    onRoleChange({ ...roles, [name]: checked })
  }

  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup
          sx={{
            position: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={roles.designer}
                onChange={handleRoles}
                name="designer"
              />
            }
            label="Designer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={roles.developer}
                onChange={handleRoles}
                name="developer"
              />
            }
            label="Developer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={roles.teamlead}
                onChange={handleRoles}
                name="teamlead"
              />
            }
            label="Team Lead"
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}
