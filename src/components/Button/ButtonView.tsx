import { ReactNode } from 'react'
import styled from 'styled-components'

import { colors, spacing } from '@/shared'

const StyledButton = styled.button`
  background-color: ${colors.main};
  color: #fff;
  border: 1px solid ${colors.main};
  padding: ${spacing.spacing4} ${spacing.spacing5};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  & svg {
    margin-left: ${spacing.spacing3}
  }
`

interface ViewProps {
  children: string | ReactNode
  type: 'submit' | 'button'
}

function ButtonView({
  children,
  type
}: ViewProps) {
  return (
    <StyledButton type={type} data-testid="button">{children}</StyledButton>
  )
}

export default ButtonView
