import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

export default function StatusButtons() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="accepted"
          control={<Radio />}
          label="Accepted"
        />
        <FormControlLabel
          value="considering"
          control={<Radio />}
          label="Considering"
        />
        <FormControlLabel
          value="waitlisted"
          control={<Radio />}
          label="Waitlisted"
        />
        <FormControlLabel value="denied" control={<Radio />} label="Denied" />
      </RadioGroup>
    </FormControl>
  )
}
