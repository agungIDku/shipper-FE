import styled from 'styled-components'
import { AlignJustify } from 'react-feather'

import { colors, media, spacing } from '@/shared'
import UserImage from '@/assets/img/user.png'
import ShipperLogo from '@/assets/img/shipperLogo.png'
import { PropsFromRedux } from './LayoutHeaderRedux'

const StyledContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${spacing.spacing5} 30px;
  @media (max-width: ${media.mobile}) {
    justify-content: space-between
  }
`

const StyledContainerLeft = styled.div`
  display: none;
  @media (max-width: ${media.mobile}) {
    display: flex
    align-items: center;
  }
`
const StyledContainerRight = styled.div`
  display: flex;
  font-size: 12px;
  display: flex;
  align-items: center;
`
const StyledImage = styled.img`
  height: 35px;
  margin-left: ${spacing.spacing5};
`
const StyledLabel = styled.span`
  color: #444444;
  @media (max-width: ${media.mobile}) {
    display: none;
  }
`
const StyledName = styled.span`
  color: ${colors.main};
  font-weight: bold
`
const StyledLogo = styled.img`
  height: 24px;
  width: auto;
  margin-left: ${spacing.spacing5};
  @media (max-width: ${media.extraSmall}) {
    height: 20px;
  }
`

function LayoutHeaderView({ dispatchGeneralVisibleSidebarSet }: PropsFromRedux) {
  return (
    <StyledContainer>
      <StyledContainerLeft>
        <AlignJustify size="22" onClick={dispatchGeneralVisibleSidebarSet} />
        <StyledLogo src={ShipperLogo} />
      </StyledContainerLeft>
      <StyledContainerRight>
        <StyledLabel>
          Hello, <StyledName>Agung Septiyadi</StyledName>
        </StyledLabel>
        <StyledImage src={UserImage} />
      </StyledContainerRight>
    </StyledContainer>
  )
}

export default LayoutHeaderView
