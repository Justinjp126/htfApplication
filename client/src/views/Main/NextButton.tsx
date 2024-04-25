import { ButtonBase, styled } from '@mui/material'
import { Link } from 'react-router-dom'

import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'

interface ButtonWithLinkProps extends ButtonProps {
  to: string
}

const NextButton = styled(ButtonBase)({
  padding: '12px 16px',
  borderRadius: '20px',
  backgroundColor: '#93da93',
  transition: 'transform 100ms ease',

  '&:hover': {
    backgroundColor: '#a2e1a2',
  },

  '&:active': {
    transform: 'scale(0.96)',
  },
})

const Button: FC<ButtonWithLinkProps> = ({ children, to, ...props }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <NextButton {...props}>Next</NextButton>
  </Link>
)

export default Button
