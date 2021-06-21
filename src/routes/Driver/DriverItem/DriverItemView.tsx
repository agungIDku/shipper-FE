import styled from 'styled-components'
import { MoreHorizontal } from 'react-feather'

import { colors, media, spacing } from '@/shared'
import { UserItemState } from '@/redux/ducks/user'
import DriverItemDesc from '@/routes/Driver/DriverItemDesc'
import UserImage from '@/assets/img/user.png'

const StyledHead = styled.div`
  padding: ${spacing.spacing5};
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  & svg {
    color: ${colors.grey};
  }
`
const StyledDriverId = styled.h4`
  color: ${colors.grey};
  line-height: 20px;
  font-weight: 400;
  & span {
    color: ${colors.main};
    font-weight: 600;
  }
`
const StyledContainer = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  flex: 0 0 auto;
  @media (max-width: ${media.small}) {
    width: 100%;
  }
  &:hover ${StyledHead} {
    background-color: ${colors.main};
    & svg {
      color: #ffffff;
    }
  }
  &:hover ${StyledDriverId} {
    color: #ffffff;
    & span {
      color: #ffffff;
    }
  }
`
const StyledContent = styled.div`
  padding: ${spacing.spacing6};
`
const StyledImage = styled.img`
  border-radius: 50%;
  height: 80px;
  margin-bottom: ${spacing.spacing4};
`

interface ViewProps extends UserItemState{
}

function DriverItemView({
  username,
  firstName,
  lastName,
  phone,
  email,
  dob,
  image
}: ViewProps) {
  return (
    <StyledContainer>
      <StyledHead>
        <StyledDriverId>Driver ID <span>{username}</span></StyledDriverId>
        <MoreHorizontal size="20" />
      </StyledHead>
      <StyledContent>
        <StyledImage src={image || UserImage} />
        <DriverItemDesc label="Nama Driver" value={`${firstName}, ${lastName}`}/>
        <DriverItemDesc label="Telepon" value={phone}/>
        <DriverItemDesc label="Email" value={email}/>
        <DriverItemDesc label="Tanggal Lahir" value={dob}/>
      </StyledContent>
    </StyledContainer>
  )
}

export default DriverItemView
