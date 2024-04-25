import { CheckBox } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MultiSelect() {
  const [selections, setSelections] = useState({
    developer: false,
    teamLeader: false,
    designer: false,
  })

  function updateSelections(value: any) {
    return setSelections((prev) => {
      return { ...prev, ...value }
    })
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">Hack the Future Application</Typography>
      <Typography variant="body1">
        What primary role are you interested in?
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">
          What other roles are you interested in?
        </Typography>
        <table>
          <tbody>
            <tr>
              <input
                type="checkbox"
                onChange={() =>
                  updateSelections({ designer: !selections.designer })
                }
              />
              <label>Designer</label>
            </tr>
            <tr>
              <input
                type="checkbox"
                onChange={() =>
                  updateSelections({ teamLeader: !selections.teamLeader })
                }
              />
              <label>Team Leader</label>
            </tr>
            <tr>
              <input
                type="checkbox"
                onChange={() =>
                  updateSelections({ developer: !selections.developer })
                }
              />
              <label>Developer</label>
            </tr>
          </tbody>
        </table>
      </Box>
    </Container>
  )
}
