import { ReactNode } from 'react'
import styled from 'styled-components'

import { colors, media, spacing } from '@/shared'

const StyledHeader = styled.div`
  padding: ${spacing.spacing5} 20px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${spacing.spacing6};
  @media (max-width: ${media.small}) {
    flex-direction: column;
  }
`
const StyledPageTitle = styled.h1`
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: ${spacing.spacing2};
  color: ${colors.main};
  font-weight: 700;
  @media (max-width: ${media.tablet}) {
    font-size: 18px;
  }
  @media (max-width: ${media.small}) {
    font-size: 22px;
  }
`
const StyledPageDesc = styled.h5`
  font-weight: 400;
  color: ${colors.black};
  @media (max-width: ${media.tablet}) {
    font-size: 12px;
  }
  @media (max-width: ${media.small}) {
    font-size: 14px;
  }
`
const StyledHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.spacing4};
  @media (max-width: ${media.small}) {
    flex-direction: column;
    & > *, input {
      width: 100%
    }
  }
`
const StyledContainerTitle = styled.div`
  @media (max-width: ${media.small}) {
    margin-bottom: ${spacing.spacing5};
  }
`

interface ViewProps {
  title: string
  description: string
  children?: ReactNode
}

function PageHeaderView({
  children,
  description,
  title,
}: ViewProps) {
  return (
    <>
      <StyledHeader>
        <StyledContainerTitle>
          <StyledPageTitle>{title}</StyledPageTitle>
          <StyledPageDesc>{description}</StyledPageDesc>
        </StyledContainerTitle>
        <StyledHeaderRight>
          {children}
        </StyledHeaderRight>
      </StyledHeader>
    </>
  )
}

export default PageHeaderView
