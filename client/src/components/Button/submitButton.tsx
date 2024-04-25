import { ButtonBase, styled } from '@mui/material'

import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'

const SubmitButtonStyle = styled(ButtonBase)({
  padding: '10px 20px',
  borderRadius: '35px',
  backgroundColor: 'rgba(3, 198, 82, 0.23)',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  border: '2px solid',
  maxWidth: '129px',
  maxHeight: '41px',
  minWidth: '129px',
  minHeight: '41px',
  fontSize: '24px',

  '&:hover': {
    backgroundColor: '#93da93',
  },
})

const SubmitButton: FC<ButtonProps> = ({ children, ...props }) => (
  <SubmitButtonStyle type="submit" {...props}>
    {children}
  </SubmitButtonStyle>
)

export default SubmitButton
