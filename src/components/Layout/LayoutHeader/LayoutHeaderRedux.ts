import { connect, ConnectedProps } from 'react-redux'

import { generalVisibleSidebarSet } from '@/redux/ducks/general'

import LayoutHeaderView from './LayoutHeaderView'

const mapDispatch = {
  dispatchGeneralVisibleSidebarSet: generalVisibleSidebarSet
}

const connector = connect(null, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(LayoutHeaderView)
