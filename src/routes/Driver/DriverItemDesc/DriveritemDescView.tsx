import styled from 'styled-components'

import { colors, spacing } from '@/shared'

const StyledContainerDriverItemDesc = styled.div`
  margin-bottom: ${spacing.spacing5};
`
const StyledLabel = styled.label`
  color: ${colors.grey};
`
const StyledValue = styled.p`
  color: ${colors.black};;
  margin-top: ${spacing.spacing2};
`

interface DriverItemDescProps {
  label: string
  value: string
}

function DriverItemDescView({ label, value }: DriverItemDescProps) {
  return (
    <StyledContainerDriverItemDesc>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </StyledContainerDriverItemDesc>
  )
}

export default DriverItemDescView
