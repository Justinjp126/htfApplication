import { ButtonBase, styled } from '@mui/material'

import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'

const SubmitButton = styled(ButtonBase)({
  padding: '12px 16px',
  borderRadius: '10px',
  backgroundColor: '#277D4A',
  color: 'white',
  fontWeight: 'bold',
  transition: 'transform 100ms ease',

  '&:hover': {
    backgroundColor: '#a2e1a2',
  },
  '&:active': {
    transform: 'scale(0.96)',
  },
})
const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <SubmitButton {...props}>Submit</SubmitButton>
)
export default Button
