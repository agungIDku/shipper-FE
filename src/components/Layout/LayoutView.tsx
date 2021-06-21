import { ReactNode } from 'react'
import styled from 'styled-components'

import { media } from '@/shared'
import LayoutSidebar from './LayoutSidebar'
import LayoutHeader from './LayoutHeader'
import { PropsFromRedux } from './LayoutRedux'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`
const StyledContainerContent = styled.div`
  width: calc(100% - 12rem);
  min-height: 100vh;
  @media (max-width: ${media.mobile}) {
    width: 100%
  }
`
const StyledContainerMainContent = styled.div`
  background-color: #fafafa;
  height: calc(100% - 64px);
  width: 100%;
`
const StyledOverlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
`

interface ViewProps extends PropsFromRedux {
  children: ReactNode
}

function LayoutView({
  children,
  isVisibleSidebar,
  dispatchGeneralVisibleSidebarSet
}: ViewProps){
  return (
    <StyledContainer>
      {isVisibleSidebar && <StyledOverlay onClick={dispatchGeneralVisibleSidebarSet} />}
      <LayoutSidebar />
      <StyledContainerContent>
        <LayoutHeader />
        <StyledContainerMainContent>
          {children}
        </StyledContainerMainContent>
      </StyledContainerContent>
    </StyledContainer>
  )
}

export default LayoutView
