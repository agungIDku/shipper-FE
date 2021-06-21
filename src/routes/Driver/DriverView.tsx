import { FormEvent ,memo } from 'react'
import styled from 'styled-components'
import { Search, Plus, ChevronRight, ChevronLeft } from 'react-feather'
import ScrollContainer from 'react-indiana-drag-scroll'


import { colors, media, spacing } from '@/shared'
import { UserItemState } from '@/redux/ducks/user'
import PageHeader from '@/components/PageHeader'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import Loading from '@/components/Loading'
import Alert from '@/components/Alert'

import DriverItem from './DriverItem'

const StyledContainerDriver = styled(ScrollContainer)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: ${spacing.spacing5};
  padding-right: 30px;
  margin-left: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${media.small}) {
    flex-direction: column
  }
`
const StyledContainer = styled.div`
  padding: 30px;
`
const StyledContainerPagination = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 30px;
`

interface StyledPaginationProps {
  isDisabled: boolean
}
const StyledPagination = styled.span<StyledPaginationProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ isDisabled }) => isDisabled ? colors.grey : colors.black};
  & svg {
    margin: 0 6px
  }
`
const StyledPaginationDesc = styled.p`
  color: ${colors.grey};
  text-align: center;
  margin: 15px 0;
  font-size: 12px;
`
const StyledLabelButton = styled.span`
  @media (max-width: ${media.tablet}) {
    display: none;
    & ~ svg {
      margin-left: 0;
    }
  }
  @media (max-width: ${media.small}) {
    display: inline-block;
    & ~ svg {
      margin-left: ${spacing.spacing3};
    }
  }
`

interface PaginationDisabledProps {
  previous: boolean
  next: boolean
}

export interface ViewProps {
  data: UserItemState[]
  handleChangeKeyword: (e: FormEvent<HTMLInputElement>) => void
  handleNextPage: () => void
  handlePreviousPage: () => void
  isError: boolean
  isLoading: boolean
  keyword: string
  maxPage: number
  page: number
  paginationDisabled: PaginationDisabledProps
}

function DriverView({
  data,
  handleChangeKeyword,
  handleNextPage,
  handlePreviousPage,
  isError,
  isLoading,
  keyword,
  maxPage,
  page,
  paginationDisabled
}: ViewProps) {
  return (
    <>
      <StyledContainer>
        <PageHeader title="Driver Management" description="Daftar Driver yang bekerja dengan Anda">
          <TextField
            placeholder="Cari Driver"
            icon={<Search />}
            onChange={handleChangeKeyword}
            value={keyword}
          />
          <Button type="button">
            <StyledLabelButton>Tambah Driver</StyledLabelButton>
            <Plus size="14" />
          </Button>
        </PageHeader>
      </StyledContainer>
      {isError ?
        (
          <StyledContainer>
            <Alert type="error" message="Ada kesalahan dalam proses data" />
          </StyledContainer>
        ) :
        <>
          {isLoading && <Loading /> }
          {!isLoading && data.length > 0 && (
            <>
              <StyledContainerDriver>
                {data.map((el: UserItemState) => <DriverItem key={el.username} {...el} />)}
              </StyledContainerDriver>
              <StyledContainerPagination>
                <StyledPagination onClick={handlePreviousPage} isDisabled={paginationDisabled.previous}>
                  <ChevronLeft size="16" /> Previous Page
                </StyledPagination>
                <StyledPagination onClick={handleNextPage} isDisabled={paginationDisabled.next}>
                  Next Page <ChevronRight size="16" />
                </StyledPagination>
              </StyledContainerPagination>
              <StyledPaginationDesc>{page} of {maxPage}</StyledPaginationDesc>
            </>
          )}
          {!isLoading && data.length === 0 && keyword.length > 0 && (
            <StyledContainer>
              <Alert type="warning" message={`Pencarian "${keyword}" tidak ditemukan`} />
            </StyledContainer>
          )}
        </>
      }
    </>
  )
}

export default memo(DriverView)
