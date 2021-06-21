import { ReactNode } from 'react'
import styled from 'styled-components'

import { colors } from '@/shared'

interface StyledProps {
  isActive: boolean
}
const StyledContainerActive = `
  border-left-color: ${colors.main};
  background-color: #fafafa;
`
const StyledContainer = styled.div<StyledProps>`
  border-left: 6px solid transparent;
  width: 100%;
  min-width: 200px;
  cursor: pointer;
  ${({ isActive }) => isActive && StyledContainerActive};
  &:hover {
    ${StyledContainerActive}
  }
`
const StyledLink = styled.span<StyledProps>`
  text-decoration: none;
  color: ${({ isActive }) => isActive ? colors.main : colors.black};
`
const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 18px;
  display: flex;
  align-items: center;
`
const StyledLabel = styled.span`
  margin-left: 15px;
  font-size: 13px;
  line-height: 17px;
`

interface ViewProps {
  icon: ReactNode
  isActive?: boolean
  label: string
  linkTo: string
}

function LayoutSidebarItemView({
  icon,
  isActive,
  label,
  linkTo
}: ViewProps) {
  return (
    <StyledContainer isActive={!!isActive}>
      <StyledLink isActive={!!isActive}>
        <StyledContent>
          {icon}
          <StyledLabel>{label}</StyledLabel>
        </StyledContent>
      </StyledLink>
    </StyledContainer>
  )
}

export default LayoutSidebarItemView
