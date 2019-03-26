import { compose } from 'redux';
import { connect } from 'react-redux';
import inject from '../../withReducer'
import mapStateToProps from './selectors';
import reducers from './reducers';
import * as actions from './actions';
import Container from './container';

const withConnect = connect(mapStateToProps, { ...actions });
const withReducers = inject("main", reducers)(Container)

export default compose(
  withConnect,
  withReducers
)(Container);
