import styled, { keyframes } from 'styled-components'

import { colors } from '@/shared'

const StyledSpinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid ${colors.main};
  width: 40px;
  height: 40px;
  animation: ${StyledSpinner} 1s linear infinite;
  margin: 0 auto;
`

function LoadingView() {
  return <StyledLoader />
}

export default LoadingView
