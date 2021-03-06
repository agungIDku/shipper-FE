import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

import { colors, spacing } from '@/shared'

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
  > svg , img {
    position: absolute;
    left: 9px;
    top: 11px;
    height: 20px;
    color: ${colors.main}
  }
`

interface StyledInputProps {
  hasIcon: boolean
}

const StyledPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,70,70, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(255,70,70, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(255,70,70, 0);
  }
`

const StyledInput = styled.input<StyledInputProps>`
  appearance: none;
  padding: ${spacing.spacing4} ${spacing.spacing4} ${spacing.spacing4} ${({ hasIcon }) => hasIcon ? `40px` : spacing.spacing4};
  outline: none;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: none;
  background-color: #fff;
  &:focus {
    border: 1px solid ${colors.main};
    outline: none;
    animation: ${StyledPulse} .8s linear;
  }
`

interface ViewProps {
  icon?: ReactNode
  placeholder?: string
  [key: string]: any
}

function TextFieldView({
  icon,
  placeholder,
  ...props
}: ViewProps) {
  return (
    <StyledContainer>
      {icon}
      <StyledInput placeholder={placeholder} type="text" {...props} hasIcon={!!icon} data-testid="text" />
    </StyledContainer>
  )
}

export default TextFieldView
