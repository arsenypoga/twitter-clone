import { setActivePage } from './actions'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import NavigationTabs from '../../Components/Toolbar/NavigationTabs'

const mapStateToProps = state => ({
  navigationItems: state.getNavigationItems
});

const mapDispatchToProps = (dispatch, ownProps) => ( {
    getNavigationItems: (page) => {
      dispatch(setActivePage(page))
    }
  }
)

const avoidBlock =  connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTabs)

export default withRouter(avoidBlock)