import { compose } from 'redux';
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import * as actions from './actions';
import Container from './container';

const withConnect = connect(mapStateToProps, { ...actions });

export default compose(
  withConnect
)(Container);
