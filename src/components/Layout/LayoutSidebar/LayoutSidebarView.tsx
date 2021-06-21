import styled from 'styled-components'
import { Calendar, Home, Users } from 'react-feather'

import { media, spacing } from '@/shared'
import ShipperLogo from '@/assets/img/shipperLogo.png'
import LayoutSidebarItem from './LayoutSidebarItem'
import { PropsFromRedux } from './LayoutSidebarRedux'

interface StyledContainerProps {
  isVisibleSidebar: boolean
}
const StyledContainer = styled.div<StyledContainerProps>`
  height: 100vh;
  width: 100%;
  max-width: 14rem;
  transition: all .3s ease-out;
  overflow: hidden;
  @media (max-width: ${media.mobile}) {
    display: ${({ isVisibleSidebar }) => isVisibleSidebar ? 'block' : 'none'};
    ${({ isVisibleSidebar }) => isVisibleSidebar && `
      display: block;
      position: fixed;
      background-color: #fff;
      z-index: 3;
    `};
  }
`
const StyledContainerLogo = styled.div`
  padding: ${spacing.spacing5};
  margin-bottom: ${spacing.spacing5};
`
const StyledImg = styled.img`
  height: 28px;
  width: auto;
`
const StyledContainerNav = styled.div`
  height: auto;
  width: 100%;
  overflow-x: hidden;
`


const SIZE_ICON = 20

function LayoutSidebarView({ isVisibleSidebar }: PropsFromRedux) {
  return (
    <StyledContainer isVisibleSidebar={isVisibleSidebar}>
      <StyledContainerLogo>
        <StyledImg src={ShipperLogo} />
      </StyledContainerLogo>
      <StyledContainerNav>
        <LayoutSidebarItem linkTo="/" label="Beranda" icon={<Home size={SIZE_ICON} />} />
        <LayoutSidebarItem isActive linkTo="/" label="Driver Management" icon={<Users size={SIZE_ICON} />} />
        <LayoutSidebarItem linkTo="/" label="Pickup" icon={<Calendar size={SIZE_ICON} />} />
      </StyledContainerNav>
    </StyledContainer>
  )
}

export default LayoutSidebarView
