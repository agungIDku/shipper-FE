import styled from 'styled-components'

import { colors, spacing } from '@/shared'

interface StyledProps {
  type: string
}

const StyledContainer = styled.div<StyledProps>`
  padding: ${spacing.spacing4} ${spacing.spacing5};
  border: 1px solid ${({ type }) => type === 'error' ? colors.main : colors.warning};
  color: ${({ type }) => type === 'error' ? colors.main : '#664d03'};
  border-radius: 6px;
  background-color: ${({ type }) => type === 'error' ? 'rgba(255, 70, 70, 0.3)' : 'rgba(246, 229, 141, 0.3)'};
`

interface ViewProps {
  type: 'error' | 'warning'
  message: string
}

function AlertView({
  message,
  type
}: ViewProps) {
  return (
    <StyledContainer type={type}>
      <p>{message}</p>
    </StyledContainer>
  )
}

export default AlertView
